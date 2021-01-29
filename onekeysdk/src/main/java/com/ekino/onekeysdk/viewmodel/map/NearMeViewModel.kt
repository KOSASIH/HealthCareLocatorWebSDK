package com.ekino.onekeysdk.viewmodel.map

import android.Manifest
import android.content.Context
import android.location.Location
import androidx.fragment.app.Fragment
import androidx.lifecycle.MutableLiveData
import base.viewmodel.ApolloViewModel
import com.ekino.onekeysdk.extensions.isNotNullable
import com.ekino.onekeysdk.extensions.isNullable
import com.ekino.onekeysdk.extensions.requestPermission
import com.ekino.onekeysdk.fragments.map.OneKeyNearMeFragment
import com.ekino.onekeysdk.model.activity.ActivityObject
import com.ekino.onekeysdk.model.map.OneKeyPlace
import com.ekino.onekeysdk.service.location.LocationAPI
import com.ekino.onekeysdk.service.location.LocationClient
import com.ekino.onekeysdk.service.location.OneKeyMapService
import com.ekino.onekeysdk.state.HealthCareLocatorSDK
import com.iqvia.onekey.GetActivitiesQuery
import com.iqvia.onekey.type.GeopointQuery
import io.reactivex.Flowable

class NearMeViewModel : ApolloViewModel<OneKeyNearMeFragment>() {
    private val theme = HealthCareLocatorSDK.getInstance().getConfiguration()

    val permissionRequested by lazy { MutableLiveData<Boolean>() }
    val activities by lazy { MutableLiveData<ArrayList<ActivityObject>>() }
    val loading by lazy { MutableLiveData<Boolean>() }

    private val executor: LocationAPI by lazy {
        OneKeyMapService.Builder(LocationAPI.mapUrl, LocationAPI::class.java).build()
    }

    fun requestPermissions(context: Fragment) {
        context.requestPermission({ granted ->
            permissionRequested.postValue(granted)
        }, Manifest.permission.WRITE_EXTERNAL_STORAGE,
                Manifest.permission.ACCESS_COARSE_LOCATION, Manifest.permission.ACCESS_FINE_LOCATION)
    }

    fun getActivities(context: Context, criteria: String, specialities: ArrayList<String>, place: OneKeyPlace?,
                      currentLocation: (location: Location) -> Unit) {
        loading.postValue(true)
        val client = LocationClient(context)
        client.requestLastLocation().registerDataCallBack({ location ->
            client.removeLocationUpdate()
            client.releaseApiClient()
            currentLocation(location)
            query({
                val builder = GetActivitiesQuery.builder()
                        .locale(theme.getLocaleCode()).first(50).offset(0)
                if (specialities.isNotEmpty()) {
                    builder.specialties(specialities)
                } else {
                    if (criteria.isNotEmpty())
                        builder.criteria(criteria)
                }
                if (place.isNotNullable() && place!!.placeId.isNotEmpty()) {
                    builder.location(GeopointQuery.builder().lat(location.latitude)
                            .lon(location.longitude).build())
                }
                builder.build()
            }, { response ->
                if (response.data?.activities().isNullable()) {
                    activities.postValue(arrayListOf())
                    loading.postValue(false)
                } else {
                    activities.postValue(response.data!!.activities()!!.run {
                        val list = ArrayList<ActivityObject>()
                        forEach { act ->
                            val obj = ActivityObject().parse(act.activity())
                            obj.distance = act.distance() ?: 0.0
                            list.add(obj)
                        }
                        list
                    })
                    loading.postValue(false)
                }
            }, {
                loading.postValue(false)
            }, true)
        }, { isAvailable ->
            if (!isAvailable)
                loading.postValue(false)
        }, {
            loading.postValue(false)
        })
    }

    fun getActivities(context: Context, criteria: String, specialities: ArrayList<String>, place: OneKeyPlace?,
                      usingCurrentLocation: Boolean, callback: (list: ArrayList<ActivityObject>) -> Unit,
                      currentLocation: (location: Location) -> Unit) {
        val client = LocationClient(context)
        client.requestLastLocation().registerDataCallBack({ location ->
            client.removeLocationUpdate()
            client.releaseApiClient()
            currentLocation(location)
            query({
                val builder = GetActivitiesQuery.builder()
                        .locale(theme.getLocaleCode()).first(50).offset(0)
                if (specialities.isNotEmpty()) {
                    builder.specialties(specialities)
                } else {
                    if (criteria.isNotEmpty())
                        builder.criteria(criteria)
                }
                if (place.isNotNullable() && place!!.placeId.isNotEmpty()) {
                    if (usingCurrentLocation)
                        builder.location(GeopointQuery.builder().lat(location.latitude)
                                .lon(location.longitude).build())
                    else
                        builder.location(GeopointQuery.builder().lat(place.latitude.toDouble())
                                .lon(place.longitude.toDouble()).build())
                }
                builder.build()
            }, { response ->
                if (response.data?.activities().isNullable()) {
                    callback(arrayListOf())
                } else {
                    callback(response.data!!.activities()!!.run {
                        val list = ArrayList<ActivityObject>()
                        forEach { act ->
                            val obj = ActivityObject().parse(act.activity())
                            obj.distance = act.distance() ?: 0.0
                            list.add(obj)
                        }
                        list
                    })
                }
            }, {
                callback(arrayListOf())
            }, true)
        }, { isAvailable ->
            if (!isAvailable)
                callback(arrayListOf())
        }, {
            callback(arrayListOf())
        })
    }

    fun reverseGeoCoding(place: OneKeyPlace, callback: (place: OneKeyPlace) -> Unit) {
        val params = hashMapOf<String, String>()
        params["lat"] = place.latitude
        params["lon"] = place.longitude
        params["format"] = "json"
        disposable?.add(executor.reverseGeoCoding(params).compose(compose())
                .subscribe({ callback(it) }, { callback(place) })
        )
    }

    fun sortActivities(list: ArrayList<ActivityObject>, sorting: Int,
                       callback: (list: ArrayList<ActivityObject>) -> Unit) {
        Flowable.just(list)
                .map {
                    if (sorting == 0) return@map it
                    it.sortWith(Comparator { o1, o2 ->
                        if (sorting == 1) o1.distance.compareTo(o2.distance)
                        else
                            (o1.individual?.lastName ?: "").compareTo(o2.individual?.lastName ?: "")
                    })
                    it
                }
                .compose(compose())
                .subscribe({ callback(it) }, {})
    }
}