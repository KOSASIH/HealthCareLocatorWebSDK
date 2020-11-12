'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7beb5087.js');
const index$1 = require('./index-5625a1c6.js');
const leafletSrc = require('./leaflet-src-3bbccca3.js');

function e(){return (e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t}).apply(this,arguments)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;}function s(t,e,n,r){void 0===e&&(e=""),void 0===r&&(r={});var o=document.createElement(t);return e&&(o.className=e),Object.keys(r).forEach(function(t){if("function"==typeof r[t]){var e=0===t.indexOf("on")?t.substr(2).toLowerCase():t;o.addEventListener(e,r[t]);}else "html"===t?o.innerHTML=r[t]:"text"===t?o.innerText=r[t]:o.setAttribute(t,r[t]);}),n&&n.appendChild(o),o}function a(t){t.preventDefault(),t.stopPropagation();}var u=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(Boolean).join(" ").trim()};function c(t,e){t&&t.classList&&(Array.isArray(e)?e:[e]).forEach(function(e){t.classList.contains(e)||t.classList.add(e);});}function l(t,e){t&&t.classList&&(Array.isArray(e)?e:[e]).forEach(function(e){t.classList.contains(e)&&t.classList.remove(e);});}var h,p=13,f=40,d=38,m=[p,27,f,d,37,39],v=function(){function t(t){var e=this,n=t.handleSubmit,r=t.searchLabel,o=t.classNames,i=void 0===o?{}:o;this.hasError=!1,this.container=s("div",u("geosearch",i.container)),this.form=s("form",["",i.form].join(" "),this.container,{autocomplete:"none",onClick:a,onDblClick:a,touchStart:a,touchEnd:a}),this.input=s("input",["glass",i.input].join(" "),this.form,{type:"text",placeholder:r||"search",onInput:this.onInput,onKeyUp:function(t){return e.onKeyUp(t)},onKeyPress:function(t){return e.onKeyPress(t)},onFocus:this.onFocus,onBlur:this.onBlur,onClick:function(){e.input.focus(),e.input.dispatchEvent(new Event("focus"));}}),this.handleSubmit=n;}var e=t.prototype;return e.onFocus=function(){c(this.form,"active");},e.onBlur=function(){l(this.form,"active");},e.onSubmit=function(t){try{var e=this;return a(t),l(n=e.container,"error"),c(n,"pending"),Promise.resolve(e.handleSubmit({query:e.input.value})).then(function(){l(e.container,"pending");})}catch(t){return Promise.reject(t)}var n;},e.onInput=function(){this.hasError&&(l(this.container,"error"),this.hasError=!1);},e.onKeyUp=function(t){27===t.keyCode&&(l(this.container,["pending","active"]),this.input.value="",document.body.focus(),document.body.blur());},e.onKeyPress=function(t){t.keyCode===p&&this.onSubmit(t);},e.setQuery=function(t){this.input.value=t;},t}(),y=function(){function t(t){var e=this,n=t.handleClick,r=t.classNames,o=void 0===r?{}:r;this.selected=-1,this.results=[],this.onClick=function(t){if("function"==typeof e.handleClick){var n=t.target;if(n&&e.container.contains(n)&&n.hasAttribute("data-key")){var r=Number(n.getAttribute("data-key"));e.clear(),e.handleClick({result:e.results[r]});}}},this.handleClick=n,this.container=s("div",u("results",o.container)),this.container.addEventListener("click",this.onClick,!0),this.resultItem=s("div",u(o.item));}var e=t.prototype;return e.render=function(t){var e=this;void 0===t&&(t=[]),this.clear(),t.forEach(function(t,n){var r=e.resultItem.cloneNode(!0);r.setAttribute("data-key",""+n),r.innerHTML=t.label,e.container.appendChild(r);}),t.length>0&&(c(this.container.parentElement,"open"),c(this.container,"active")),this.results=t;},e.select=function(t){return Array.from(this.container.children).forEach(function(e,n){return n===t?c(e,"active"):l(e,"active")}),this.selected=t,this.results[t]},e.count=function(){return this.results?this.results.length:0},e.clear=function(){for(this.selected=-1;this.container.lastChild;)this.container.removeChild(this.container.lastChild);l(this.container.parentElement,"open"),l(this.container,"active");},t}(),g={position:"topleft",style:"button",showMarker:!0,showPopup:!1,popupFormat:function(t){return ""+t.result.label},marker:{icon:leafletSrc.leafletSrc&&leafletSrc.leafletSrc.Icon?new leafletSrc.leafletSrc.Icon.Default:void 0,draggable:!1},maxMarkers:1,maxSuggestions:5,retainZoomLevel:!1,animateZoom:!0,searchLabel:"Enter address",notFoundMessage:"Sorry, that address could not be found.",messageHideDelay:3e3,zoomLevel:18,classNames:{container:"leaflet-bar leaflet-control leaflet-control-geosearch",button:"leaflet-bar-part leaflet-bar-part-single",resetButton:"reset",msgbox:"leaflet-bar message",form:"",input:""},autoComplete:!0,autoCompleteDelay:250,autoClose:!1,keepResult:!1,updateMap:!0},b="Leaflet must be loaded before instantiating the GeoSearch control",E={options:e({},g),classNames:e({},g.classNames),initialize:function(n){var r,o,i,a,u=this;if(!leafletSrc.leafletSrc)throw new Error(b);if(!n.provider)throw new Error("Provider is missing from options");this.options=e({},this.options,{},n),this.classNames=e({},this.classNames,{},n.classNames),this.markers=new leafletSrc.leafletSrc.FeatureGroup,this.classNames.container+=" leaflet-geosearch-"+this.options.style,this.searchElement=new v({searchLabel:this.options.searchLabel,classNames:{container:this.classNames.container,form:this.classNames.form,input:this.classNames.input},handleSubmit:function(t){return u.onSubmit(t)}}),this.button=s("a",this.classNames.button,this.searchElement.container,{title:this.options.searchLabel,href:"#",onClick:function(t){return u.onClick(t)}}),leafletSrc.leafletSrc.DomEvent.disableClickPropagation(this.button),this.resetButton=s("a",this.classNames.resetButton,this.searchElement.form,{text:"×",href:"#",onClick:function(){return u.clearResults(null,!0)}}),leafletSrc.leafletSrc.DomEvent.disableClickPropagation(this.resetButton),this.options.autoComplete&&(this.resultList=new y({handleClick:function(t){var e=t.result;u.searchElement.input.value=e.label,u.onSubmit({query:e.label,data:e});}}),this.searchElement.form.appendChild(this.resultList.container),this.searchElement.input.addEventListener("keyup",(r=function(t){return u.autoSearch(t)},void 0===(o=this.options.autoCompleteDelay)&&(o=250),void 0===i&&(i=!1),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];a&&clearTimeout(a),a=setTimeout(function(){a=null,i||r.apply(void 0,e);},o),i&&!a&&r.apply(void 0,e);}),!0),this.searchElement.input.addEventListener("keydown",function(t){return u.selectResult(t)},!0),this.searchElement.input.addEventListener("keydown",function(t){return u.clearResults(t,!0)},!0)),this.searchElement.form.addEventListener("click",function(t){t.preventDefault();},!1);},onAdd:function(e){var n=this.options,r=n.showMarker,o=n.style;if(this.map=e,r&&this.markers.addTo(e),"bar"===o){var i=e.getContainer().querySelector(".leaflet-control-container");this.container=s("div","leaflet-control-geosearch leaflet-geosearch-bar"),this.container.appendChild(this.searchElement.form),i.appendChild(this.container);}return leafletSrc.leafletSrc.DomEvent.disableClickPropagation(this.searchElement.form),this.searchElement.container},onRemove:function(){var t;return null==(t=this.container)||t.remove(),this},onClick:function(t){t.preventDefault(),t.stopPropagation();var e=this.searchElement,n=e.container,r=e.input;n.classList.contains("active")?(l(n,"active"),this.clearResults()):(c(n,"active"),r.focus());},selectResult:function(t){if(-1!==[p,f,d].indexOf(t.keyCode))if(t.preventDefault(),t.keyCode!==p){var e=this.resultList.count()-1;if(!(e<0)){var n=this.resultList.selected,r=t.keyCode===f?n+1:n-1,o=this.resultList.select(r<0?e:r>e?0:r);this.searchElement.input.value=o.label;}}else {var i=this.resultList.select(this.resultList.selected);this.onSubmit({query:this.searchElement.input.value,data:i});}},clearResults:function(t,e){if(void 0===e&&(e=!1),!t||27===t.keyCode){var n=this.options,r=n.autoComplete;!e&&n.keepResult||(this.searchElement.input.value="",this.markers.clearLayers()),r&&this.resultList.clear();}},autoSearch:function(t){try{var e=this;if(m.indexOf(t.keyCode)>-1)return Promise.resolve();var n=t.target.value,r=e.options.provider,o=function(){if(n.length)return Promise.resolve(r.search({query:n})).then(function(t){t=t.slice(0,e.options.maxSuggestions),e.resultList.render(t);});e.resultList.clear();}();return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},onSubmit:function(t){try{var e=this;return Promise.resolve(e.options.provider.search(t)).then(function(n){n&&n.length>0&&e.showResult(n[0],t);})}catch(t){return Promise.reject(t)}},showResult:function(t,e){var n=this.options,r=n.autoClose,o=n.updateMap,i=this.markers.getLayers();i.length>=this.options.maxMarkers&&this.markers.removeLayer(i[0]);var s=this.addMarker(t,e);o&&this.centerMap(t),this.map.fireEvent("geosearch/showlocation",{location:t,marker:s}),r&&this.closeResults();},closeResults:function(){var t=this.searchElement.container;t.classList.contains("active")&&l(t,"active"),this.clearResults();},addMarker:function(e,n){var r=this,o=this.options,i=o.marker,s=o.showPopup,a=o.popupFormat,u=new leafletSrc.leafletSrc.Marker([e.y,e.x],i),c=e.label;return "function"==typeof a&&(c=a({query:n,result:e})),u.bindPopup(c),this.markers.addLayer(u),s&&u.openPopup(),i.draggable&&u.on("dragend",function(t){r.map.fireEvent("geosearch/marker/dragend",{location:u.getLatLng(),event:t});}),u},centerMap:function(e){var n=this.options,r=n.retainZoomLevel,o=n.animateZoom,i=e.bounds?new leafletSrc.leafletSrc.LatLngBounds(e.bounds):new leafletSrc.leafletSrc.LatLng(e.y,e.x).toBounds(10),s=i.isValid()?i:this.markers.getBounds();!r&&i.isValid()?this.map.fitBounds(s,{animate:o}):this.map.setView(s.getCenter(),this.getZoom(),{animate:o});},getZoom:function(){var t=this.options,e=t.zoomLevel;return t.retainZoomLevel?this.map.getZoom():e}};!function(t){t[t.SEARCH=0]="SEARCH",t[t.REVERSE=1]="REVERSE";}(h||(h={}));var k=function(){function t(t){void 0===t&&(t={}),this.options=t;}var n=t.prototype;return n.getParamString=function(t){void 0===t&&(t={});var n=e({},this.options.params,{},t);return Object.keys(n).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(n[t])}).join("&")},n.getUrl=function(t,e){return t+"?"+this.getParamString(e)},n.search=function(t){try{var e=this,n=e.endpoint({query:t.query,type:h.SEARCH});return Promise.resolve(fetch(n)).then(function(t){return Promise.resolve(t.json()).then(function(t){return e.parse({data:t})})})}catch(t){return Promise.reject(t)}},t}(),w=function(t){function r(){return t.apply(this,arguments)||this}n(r,t);var o=r.prototype;return o.endpoint=function(){return "https://places-dsn.algolia.net/1/places/query"},o.findBestMatchLevelIndex=function(t){var e=t.find(function(t){return "full"===t.matchLevel})||t.find(function(t){return "partial"===t.matchLevel});return e?t.indexOf(e):0},o.getLabel=function(t){var e,n,r,o;return [null==(e=t.locale_names)?void 0:e.default[this.findBestMatchLevelIndex(t._highlightResult.locale_names.default)],null==(n=t.city)?void 0:n.default[this.findBestMatchLevelIndex(t._highlightResult.city.default)],t.administrative[this.findBestMatchLevelIndex(t._highlightResult.administrative)],null==(r=t.postcode)?void 0:r[this.findBestMatchLevelIndex(t._highlightResult.postcode)],null==(o=t.country)?void 0:o.default].filter(Boolean).join(", ")},o.parse=function(t){var e=this;return t.data.hits.map(function(t){return {x:t._geoloc.lng,y:t._geoloc.lat,label:e.getLabel(t),bounds:null,raw:t}})},o.search=function(t){var n=t.query;try{var r=this,o="string"==typeof n?{query:n}:n;return Promise.resolve(fetch(r.endpoint(),{method:"POST",body:JSON.stringify(e({},r.options.params,{},o))})).then(function(t){return Promise.resolve(t.json()).then(function(t){return r.parse({data:t})})})}catch(t){return Promise.reject(t)}},r}(k),C=function(t){function e(){var e;return (e=t.apply(this,arguments)||this).searchUrl="https://dev.virtualearth.net/REST/v1/Locations",e}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,n="string"==typeof e?{q:e}:e;return n.jsonp=t.jsonp,this.getUrl(this.searchUrl,n)},r.parse=function(t){return 0===t.data.resourceSets.length?[]:t.data.resourceSets[0].resources.map(function(t){return {x:t.point.coordinates[1],y:t.point.coordinates[0],label:t.address.formattedAddress,bounds:[[t.bbox[0],t.bbox[1]],[t.bbox[2],t.bbox[3]]],raw:t}})},r.search=function(t){var e,n,r,o=t.query;try{var i=this,a="BING_JSONP_CB_"+Date.now();return Promise.resolve((e=i.endpoint({query:o,jsonp:a}),n=a,r=s("script",null,document.body),r.setAttribute("type","text/javascript"),new Promise(function(t){window[n]=function(e){r.remove(),delete window[n],t(e);},r.setAttribute("src",e);}))).then(function(t){return i.parse({data:t})})}catch(t){return Promise.reject(t)}},e}(k),x=function(t){function e(){var e;return (e=t.apply(this,arguments)||this).searchUrl="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find",e}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,n="string"==typeof e?{text:e}:e;return n.f="json",this.getUrl(this.searchUrl,n)},r.parse=function(t){return t.data.locations.map(function(t){return {x:t.feature.geometry.x,y:t.feature.geometry.y,label:t.name,bounds:[[t.extent.ymin,t.extent.xmin],[t.extent.ymax,t.extent.xmax]],raw:t}})},e}(k),P=function(t){function e(){var e;return (e=t.apply(this,arguments)||this).searchUrl="https://maps.googleapis.com/maps/api/geocode/json",e}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query;return this.getUrl(this.searchUrl,"string"==typeof e?{address:e}:e)},r.parse=function(t){return t.data.results.map(function(t){return {x:t.geometry.location.lng,y:t.geometry.location.lat,label:t.formatted_address,bounds:[[t.geometry.viewport.southwest.lat,t.geometry.viewport.southwest.lng],[t.geometry.viewport.northeast.lat,t.geometry.viewport.northeast.lng]],raw:t}})},e}(k),R=function(t){function e(){var e;return (e=t.apply(this,arguments)||this).searchUrl="https://geocode.search.hereapi.com/v1/geocode",e}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query;return this.getUrl(this.searchUrl,"string"==typeof e?{q:e}:e)},r.parse=function(t){return t.data.items.map(function(t){return {x:t.position.lng,y:t.position.lat,label:t.address.label,bounds:null,raw:t}})},e}(k),S=function(t){function e(e){var n;void 0===e&&(e={});var r="https://nominatim.openstreetmap.org";return (n=t.call(this,e)||this).searchUrl=e.searchUrl||r+"/search",n.reverseUrl=e.reverseUrl||r+"/reverse",n}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,n=t.type,r="string"==typeof e?{q:e}:e;switch(r.format="json",n){case h.REVERSE:return this.getUrl(this.reverseUrl,r);default:return this.getUrl(this.searchUrl,r)}},r.parse=function(t){return (Array.isArray(t.data)?t.data:[t.data]).map(function(t){return {x:Number(t.lon),y:Number(t.lat),label:t.display_name,bounds:[[parseFloat(t.boundingbox[0]),parseFloat(t.boundingbox[2])],[parseFloat(t.boundingbox[1]),parseFloat(t.boundingbox[3])]],raw:t}})},e}(k),U=function(t){function r(n){return t.call(this,e({},n,{searchUrl:"https://locationiq.org/v1/search.php",reverseUrl:"https://locationiq.org/v1/reverse.php"}))||this}return n(r,t),r}(S),j=function(t){function e(){var e;return (e=t.apply(this,arguments)||this).searchUrl="https://api.opencagedata.com/geocode/v1/json",e}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,n="string"==typeof e?{q:e}:e;return n.format="json",this.getUrl(this.searchUrl,n)},r.parse=function(t){return t.data.results.map(function(t){return {x:t.geometry.lng,y:t.geometry.lat,label:t.formatted,bounds:[[t.bounds.southwest.lat,t.bounds.southwest.lng],[t.bounds.northeast.lat,t.bounds.northeast.lng]],raw:t}})},r.search=function(e){try{return Promise.resolve(e.query.length<2?[]:t.prototype.search.call(this,e))}catch(t){return Promise.reject(t)}},e}(k);

const onekeySdkSearchCss = ":host .icon{margin:0 1rem}:host .btn-back a{color:#666;margin-right:0.5rem}:host .search-hpc{display:-ms-flexbox;display:flex}:host .search-btn{-ms-flex-item-align:center;align-self:center}:host .search-form{display:-ms-flexbox;display:flex}:host .search-address-item{padding:1rem;border-bottom:1px solid #ddd;cursor:pointer}:host .search-address-item.active{border-bottom:1px solid green;color:green}";

const OnekeySdkSearch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.formData = {
      name: '',
      address: ''
    };
    this.searchResult = [];
    this.selectedAddress = {};
    this.provider = new S();
    this.onSearch = (e) => {
      e.preventDefault();
      index$1.searchMapStore.setState({
        search: Object.assign(Object.assign({}, this.formData), { selectedItem: this.selectedAddress })
      });
      index$1.routerStore.push('/search-result');
    };
    this.onChange = async (e) => {
      this.formData = Object.assign(Object.assign({}, this.formData), { [e.target.id]: e.target.value });
      if (e.target.id === 'address') {
        const results = await this.provider.search({ query: e.target.value });
        this.searchResult = [...results];
      }
    };
    this.onSelectAddress = (addr) => {
      this.selectedAddress = Object.assign({}, addr);
    };
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "main-block-full main-block--full" }, index.h("div", { class: "search-hpc" }, index.h("onekey-sdk-router-link", { url: "/", class: "btn-back" }, index.h("ion-icon", { name: "arrow-back-outline", size: "large" })), index.h("form", { onSubmit: this.onSearch, class: "search-form" }, index.h("div", null, index.h("input", { id: "name", placeholder: "Name, Speciality, Establishment...", onChange: this.onChange }), index.h("input", { value: this.selectedAddress.label, id: "address", placeholder: "Near me", onChange: this.onChange })), index.h("button", { class: "icon btn search-btn", type: "submit" }, index.h("ion-icon", { name: "search-outline" }))))), index.h("div", { class: "main-contain" }, index.h("ul", null, this.searchResult.map(elm => {
      var _a, _b;
      return (index.h("li", { class: `search-address-item ${((_b = (_a = this.selectedAddress) === null || _a === void 0 ? void 0 : _a.raw) === null || _b === void 0 ? void 0 : _b.place_id) === elm.raw.place_id ? 'active' : ''}`, onClick: () => this.onSelectAddress(elm) }, elm.label));
    })))));
  }
};
OnekeySdkSearch.style = onekeySdkSearchCss;

exports.onekey_sdk_search = OnekeySdkSearch;
