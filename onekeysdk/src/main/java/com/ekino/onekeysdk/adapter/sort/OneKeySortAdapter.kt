package com.ekino.onekeysdk.adapter.sort

import android.content.res.ColorStateList
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.ekino.onekeysdk.R
import com.ekino.onekeysdk.adapter.OneKeyAdapter
import com.ekino.onekeysdk.adapter.OneKeyViewHolder
import com.ekino.onekeysdk.extensions.getColor
import com.ekino.onekeysdk.model.config.OneKeyCustomObject
import com.ekino.onekeysdk.model.map.OneKeySortObject
import com.ekino.onekeysdk.state.OneKeySDK
import kotlinx.android.synthetic.main.layout_one_key_sort.view.*

class OneKeySortAdapter : OneKeyAdapter<OneKeySortObject, OneKeySortAdapter.OneKeySortVH>(arrayListOf(R.layout.layout_one_key_sort)) {
    private val theme: OneKeyCustomObject by lazy { OneKeySDK.getInstance().getConfiguration() }
    private var selectedPosition = -1
    override fun initViewHolder(parent: ViewGroup, viewType: Int): OneKeySortVH =
            OneKeySortVH(LayoutInflater.from(parent.context)
                    .inflate(layoutIds[0], parent, false))

    inner class OneKeySortVH(itemView: View) : OneKeyViewHolder<OneKeySortObject>(itemView) {
        override fun bind(position: Int, data: OneKeySortObject) {
            itemView.apply {
                tvSortTitle.text = data.title
                data.selected = selectedPosition == position
                cbxSort.isChecked = data.selected
                cbxSort.buttonTintList = ColorStateList(arrayOf(intArrayOf(-android.R.attr.state_checked), intArrayOf(android.R.attr.state_checked)),
                        intArrayOf(theme.colorGreyLight.getColor(), theme.colorPrimary.getColor()))
                setOnClickListener {
                    setSelectedPosition(position)
                }
            }
        }
    }

    fun setSelectedPosition(position: Int) {
        notifyItemChanged(selectedPosition)
        selectedPosition = position
        notifyItemChanged(selectedPosition)
    }

    fun getSelectedPosition() = selectedPosition
}