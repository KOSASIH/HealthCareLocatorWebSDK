import { p as promiseResolve, b as bootstrapLazy } from './index-20b60922.js';

/*
 Stencil Client Patch Browser v2.2.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["onekey-sdk-doctor-card_2",[[0,"onekey-sdk-doctor-card",{"name":[1],"gp":[1],"address":[1],"distance":[1]}],[0,"onekey-sdk-map",{"mapHeight":[1,"map-height"],"mapWidth":[1,"map-width"],"locations":[16],"defaultZoom":[2,"default-zoom"],"selectedLocationIdx":[2,"selected-location-idx"],"mapTileLayer":[1,"map-tile-layer"],"mapLink":[1,"map-link"],"markerIconCurrentLocation":[1,"marker-icon-current-location"],"markerIcon":[1,"marker-icon"]}]]],["ion-icon_2",[[4,"onekey-sdk-router-link",{"url":[1],"activeClass":[1,"active-class"],"custom":[1],"anchorClass":[1,"anchor-class"],"anchorRole":[1,"anchor-role"],"anchorTitle":[1,"anchor-title"],"anchorTabIndex":[1,"anchor-tab-index"],"anchorId":[1,"anchor-id"],"ariaHaspopup":[1,"aria-haspopup"],"ariaPosinset":[1,"aria-posinset"],"ariaSetsize":[2,"aria-setsize"],"ariaLabel":[1,"aria-label"]},[[2,"click","handleClick"]]],[1,"ion-icon",{"mode":[1025],"color":[1],"ariaLabel":[1537,"aria-label"],"ariaHidden":[513,"aria-hidden"],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[1],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]}]]],["onekey-sdk-search-result",[[0,"onekey-sdk-search-result"]]],["onekey-sdk-search",[[0,"onekey-sdk-search",{"formData":[32],"searchResult":[32],"selectedAddress":[32]}]]],["onekey-sdk-home",[[0,"onekey-sdk-home"]]],["onekey-sdk_3",[[1,"onekey-sdk",{"config":[16]}],[0,"onekey-sdk-route",{"component":[513],"path":[513]}],[4,"onekey-sdk-router"]]]], options);
});
