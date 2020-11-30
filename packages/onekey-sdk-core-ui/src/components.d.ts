/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { OneKeySDKConfigData } from "./core/stores/ConfigStore";
export namespace Components {
    interface OnekeySdk {
        "config": OneKeySDKConfigData;
    }
    interface OnekeySdkButton {
        "class": string;
        "disabled": boolean;
        "icon": string;
        "iconColor": string;
        "isFull": boolean;
        "noBackground": boolean;
        "noBorder": boolean;
        "noTextColor": boolean;
        "primary": boolean;
        "round": boolean;
        "secondary": boolean;
    }
    interface OnekeySdkDoctorCard {
        "address": string;
        "distance": string;
        "gp": string;
        "name": string;
        "selected": boolean;
        "viewMode": string;
    }
    interface OnekeySdkHcpFullCard {
    }
    interface OnekeySdkHome {
    }
    interface OnekeySdkIcon {
        "color": string;
        "height": number;
        "name": string;
        "primary": boolean;
        "width": number;
    }
    interface OnekeySdkIconArrow {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconDefaultAvatar {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconDirection {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconDislike {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconEarth {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconEdit {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconLike {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconList {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconLocation {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconMap {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconPersonal {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconPhone {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconPrinter {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconSearch {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkIconShare {
        "color": string;
        "height": number;
        "width": number;
    }
    interface OnekeySdkLoading {
    }
    interface OnekeySdkMap {
        "defaultZoom": number;
        "locations": any[];
        "mapHeight": string;
        "mapWidth": string;
        "markerIcon": string;
        "noCurrentLocation": boolean;
        "selectedLocationIdx": number;
        "zoomControl": boolean;
    }
    interface OnekeySdkResizable {
    }
    interface OnekeySdkRoute {
        "component": string;
        "path": string;
    }
    interface OnekeySdkRouter {
    }
    interface OnekeySdkRouterLink {
        "activeClass": string;
        "anchorClass"?: string;
        "anchorId"?: string;
        "anchorRole"?: string;
        "anchorTabIndex"?: string;
        "anchorTitle"?: string;
        "ariaHaspopup"?: string;
        "ariaLabel"?: string;
        "ariaPosinset"?: string;
        "ariaSetsize"?: number;
        "custom": string;
        "url": string;
    }
    interface OnekeySdkSearch {
    }
    interface OnekeySdkSearchAddressItem {
        "activated": boolean;
        "item": any;
    }
    interface OnekeySdkSearchResult {
    }
    interface OnekeySdkSwitchViewMode {
    }
    interface OnekeySdkViewport {
        "sizes": Object[];
    }
}
declare global {
    interface HTMLOnekeySdkElement extends Components.OnekeySdk, HTMLStencilElement {
    }
    var HTMLOnekeySdkElement: {
        prototype: HTMLOnekeySdkElement;
        new (): HTMLOnekeySdkElement;
    };
    interface HTMLOnekeySdkButtonElement extends Components.OnekeySdkButton, HTMLStencilElement {
    }
    var HTMLOnekeySdkButtonElement: {
        prototype: HTMLOnekeySdkButtonElement;
        new (): HTMLOnekeySdkButtonElement;
    };
    interface HTMLOnekeySdkDoctorCardElement extends Components.OnekeySdkDoctorCard, HTMLStencilElement {
    }
    var HTMLOnekeySdkDoctorCardElement: {
        prototype: HTMLOnekeySdkDoctorCardElement;
        new (): HTMLOnekeySdkDoctorCardElement;
    };
    interface HTMLOnekeySdkHcpFullCardElement extends Components.OnekeySdkHcpFullCard, HTMLStencilElement {
    }
    var HTMLOnekeySdkHcpFullCardElement: {
        prototype: HTMLOnekeySdkHcpFullCardElement;
        new (): HTMLOnekeySdkHcpFullCardElement;
    };
    interface HTMLOnekeySdkHomeElement extends Components.OnekeySdkHome, HTMLStencilElement {
    }
    var HTMLOnekeySdkHomeElement: {
        prototype: HTMLOnekeySdkHomeElement;
        new (): HTMLOnekeySdkHomeElement;
    };
    interface HTMLOnekeySdkIconElement extends Components.OnekeySdkIcon, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconElement: {
        prototype: HTMLOnekeySdkIconElement;
        new (): HTMLOnekeySdkIconElement;
    };
    interface HTMLOnekeySdkIconArrowElement extends Components.OnekeySdkIconArrow, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconArrowElement: {
        prototype: HTMLOnekeySdkIconArrowElement;
        new (): HTMLOnekeySdkIconArrowElement;
    };
    interface HTMLOnekeySdkIconDefaultAvatarElement extends Components.OnekeySdkIconDefaultAvatar, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconDefaultAvatarElement: {
        prototype: HTMLOnekeySdkIconDefaultAvatarElement;
        new (): HTMLOnekeySdkIconDefaultAvatarElement;
    };
    interface HTMLOnekeySdkIconDirectionElement extends Components.OnekeySdkIconDirection, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconDirectionElement: {
        prototype: HTMLOnekeySdkIconDirectionElement;
        new (): HTMLOnekeySdkIconDirectionElement;
    };
    interface HTMLOnekeySdkIconDislikeElement extends Components.OnekeySdkIconDislike, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconDislikeElement: {
        prototype: HTMLOnekeySdkIconDislikeElement;
        new (): HTMLOnekeySdkIconDislikeElement;
    };
    interface HTMLOnekeySdkIconEarthElement extends Components.OnekeySdkIconEarth, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconEarthElement: {
        prototype: HTMLOnekeySdkIconEarthElement;
        new (): HTMLOnekeySdkIconEarthElement;
    };
    interface HTMLOnekeySdkIconEditElement extends Components.OnekeySdkIconEdit, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconEditElement: {
        prototype: HTMLOnekeySdkIconEditElement;
        new (): HTMLOnekeySdkIconEditElement;
    };
    interface HTMLOnekeySdkIconLikeElement extends Components.OnekeySdkIconLike, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconLikeElement: {
        prototype: HTMLOnekeySdkIconLikeElement;
        new (): HTMLOnekeySdkIconLikeElement;
    };
    interface HTMLOnekeySdkIconListElement extends Components.OnekeySdkIconList, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconListElement: {
        prototype: HTMLOnekeySdkIconListElement;
        new (): HTMLOnekeySdkIconListElement;
    };
    interface HTMLOnekeySdkIconLocationElement extends Components.OnekeySdkIconLocation, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconLocationElement: {
        prototype: HTMLOnekeySdkIconLocationElement;
        new (): HTMLOnekeySdkIconLocationElement;
    };
    interface HTMLOnekeySdkIconMapElement extends Components.OnekeySdkIconMap, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconMapElement: {
        prototype: HTMLOnekeySdkIconMapElement;
        new (): HTMLOnekeySdkIconMapElement;
    };
    interface HTMLOnekeySdkIconPersonalElement extends Components.OnekeySdkIconPersonal, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconPersonalElement: {
        prototype: HTMLOnekeySdkIconPersonalElement;
        new (): HTMLOnekeySdkIconPersonalElement;
    };
    interface HTMLOnekeySdkIconPhoneElement extends Components.OnekeySdkIconPhone, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconPhoneElement: {
        prototype: HTMLOnekeySdkIconPhoneElement;
        new (): HTMLOnekeySdkIconPhoneElement;
    };
    interface HTMLOnekeySdkIconPrinterElement extends Components.OnekeySdkIconPrinter, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconPrinterElement: {
        prototype: HTMLOnekeySdkIconPrinterElement;
        new (): HTMLOnekeySdkIconPrinterElement;
    };
    interface HTMLOnekeySdkIconSearchElement extends Components.OnekeySdkIconSearch, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconSearchElement: {
        prototype: HTMLOnekeySdkIconSearchElement;
        new (): HTMLOnekeySdkIconSearchElement;
    };
    interface HTMLOnekeySdkIconShareElement extends Components.OnekeySdkIconShare, HTMLStencilElement {
    }
    var HTMLOnekeySdkIconShareElement: {
        prototype: HTMLOnekeySdkIconShareElement;
        new (): HTMLOnekeySdkIconShareElement;
    };
    interface HTMLOnekeySdkLoadingElement extends Components.OnekeySdkLoading, HTMLStencilElement {
    }
    var HTMLOnekeySdkLoadingElement: {
        prototype: HTMLOnekeySdkLoadingElement;
        new (): HTMLOnekeySdkLoadingElement;
    };
    interface HTMLOnekeySdkMapElement extends Components.OnekeySdkMap, HTMLStencilElement {
    }
    var HTMLOnekeySdkMapElement: {
        prototype: HTMLOnekeySdkMapElement;
        new (): HTMLOnekeySdkMapElement;
    };
    interface HTMLOnekeySdkResizableElement extends Components.OnekeySdkResizable, HTMLStencilElement {
    }
    var HTMLOnekeySdkResizableElement: {
        prototype: HTMLOnekeySdkResizableElement;
        new (): HTMLOnekeySdkResizableElement;
    };
    interface HTMLOnekeySdkRouteElement extends Components.OnekeySdkRoute, HTMLStencilElement {
    }
    var HTMLOnekeySdkRouteElement: {
        prototype: HTMLOnekeySdkRouteElement;
        new (): HTMLOnekeySdkRouteElement;
    };
    interface HTMLOnekeySdkRouterElement extends Components.OnekeySdkRouter, HTMLStencilElement {
    }
    var HTMLOnekeySdkRouterElement: {
        prototype: HTMLOnekeySdkRouterElement;
        new (): HTMLOnekeySdkRouterElement;
    };
    interface HTMLOnekeySdkRouterLinkElement extends Components.OnekeySdkRouterLink, HTMLStencilElement {
    }
    var HTMLOnekeySdkRouterLinkElement: {
        prototype: HTMLOnekeySdkRouterLinkElement;
        new (): HTMLOnekeySdkRouterLinkElement;
    };
    interface HTMLOnekeySdkSearchElement extends Components.OnekeySdkSearch, HTMLStencilElement {
    }
    var HTMLOnekeySdkSearchElement: {
        prototype: HTMLOnekeySdkSearchElement;
        new (): HTMLOnekeySdkSearchElement;
    };
    interface HTMLOnekeySdkSearchAddressItemElement extends Components.OnekeySdkSearchAddressItem, HTMLStencilElement {
    }
    var HTMLOnekeySdkSearchAddressItemElement: {
        prototype: HTMLOnekeySdkSearchAddressItemElement;
        new (): HTMLOnekeySdkSearchAddressItemElement;
    };
    interface HTMLOnekeySdkSearchResultElement extends Components.OnekeySdkSearchResult, HTMLStencilElement {
    }
    var HTMLOnekeySdkSearchResultElement: {
        prototype: HTMLOnekeySdkSearchResultElement;
        new (): HTMLOnekeySdkSearchResultElement;
    };
    interface HTMLOnekeySdkSwitchViewModeElement extends Components.OnekeySdkSwitchViewMode, HTMLStencilElement {
    }
    var HTMLOnekeySdkSwitchViewModeElement: {
        prototype: HTMLOnekeySdkSwitchViewModeElement;
        new (): HTMLOnekeySdkSwitchViewModeElement;
    };
    interface HTMLOnekeySdkViewportElement extends Components.OnekeySdkViewport, HTMLStencilElement {
    }
    var HTMLOnekeySdkViewportElement: {
        prototype: HTMLOnekeySdkViewportElement;
        new (): HTMLOnekeySdkViewportElement;
    };
    interface HTMLElementTagNameMap {
        "onekey-sdk": HTMLOnekeySdkElement;
        "onekey-sdk-button": HTMLOnekeySdkButtonElement;
        "onekey-sdk-doctor-card": HTMLOnekeySdkDoctorCardElement;
        "onekey-sdk-hcp-full-card": HTMLOnekeySdkHcpFullCardElement;
        "onekey-sdk-home": HTMLOnekeySdkHomeElement;
        "onekey-sdk-icon": HTMLOnekeySdkIconElement;
        "onekey-sdk-icon-arrow": HTMLOnekeySdkIconArrowElement;
        "onekey-sdk-icon-default-avatar": HTMLOnekeySdkIconDefaultAvatarElement;
        "onekey-sdk-icon-direction": HTMLOnekeySdkIconDirectionElement;
        "onekey-sdk-icon-dislike": HTMLOnekeySdkIconDislikeElement;
        "onekey-sdk-icon-earth": HTMLOnekeySdkIconEarthElement;
        "onekey-sdk-icon-edit": HTMLOnekeySdkIconEditElement;
        "onekey-sdk-icon-like": HTMLOnekeySdkIconLikeElement;
        "onekey-sdk-icon-list": HTMLOnekeySdkIconListElement;
        "onekey-sdk-icon-location": HTMLOnekeySdkIconLocationElement;
        "onekey-sdk-icon-map": HTMLOnekeySdkIconMapElement;
        "onekey-sdk-icon-personal": HTMLOnekeySdkIconPersonalElement;
        "onekey-sdk-icon-phone": HTMLOnekeySdkIconPhoneElement;
        "onekey-sdk-icon-printer": HTMLOnekeySdkIconPrinterElement;
        "onekey-sdk-icon-search": HTMLOnekeySdkIconSearchElement;
        "onekey-sdk-icon-share": HTMLOnekeySdkIconShareElement;
        "onekey-sdk-loading": HTMLOnekeySdkLoadingElement;
        "onekey-sdk-map": HTMLOnekeySdkMapElement;
        "onekey-sdk-resizable": HTMLOnekeySdkResizableElement;
        "onekey-sdk-route": HTMLOnekeySdkRouteElement;
        "onekey-sdk-router": HTMLOnekeySdkRouterElement;
        "onekey-sdk-router-link": HTMLOnekeySdkRouterLinkElement;
        "onekey-sdk-search": HTMLOnekeySdkSearchElement;
        "onekey-sdk-search-address-item": HTMLOnekeySdkSearchAddressItemElement;
        "onekey-sdk-search-result": HTMLOnekeySdkSearchResultElement;
        "onekey-sdk-switch-view-mode": HTMLOnekeySdkSwitchViewModeElement;
        "onekey-sdk-viewport": HTMLOnekeySdkViewportElement;
    }
}
declare namespace LocalJSX {
    interface OnekeySdk {
        "config"?: OneKeySDKConfigData;
    }
    interface OnekeySdkButton {
        "class"?: string;
        "disabled"?: boolean;
        "icon"?: string;
        "iconColor"?: string;
        "isFull"?: boolean;
        "noBackground"?: boolean;
        "noBorder"?: boolean;
        "noTextColor"?: boolean;
        "primary"?: boolean;
        "round"?: boolean;
        "secondary"?: boolean;
    }
    interface OnekeySdkDoctorCard {
        "address"?: string;
        "distance"?: string;
        "gp"?: string;
        "name"?: string;
        "selected"?: boolean;
        "viewMode"?: string;
    }
    interface OnekeySdkHcpFullCard {
    }
    interface OnekeySdkHome {
    }
    interface OnekeySdkIcon {
        "color"?: string;
        "height"?: number;
        "name"?: string;
        "primary"?: boolean;
        "width"?: number;
    }
    interface OnekeySdkIconArrow {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconDefaultAvatar {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconDirection {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconDislike {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconEarth {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconEdit {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconLike {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconList {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconLocation {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconMap {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconPersonal {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconPhone {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconPrinter {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconSearch {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkIconShare {
        "color"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface OnekeySdkLoading {
    }
    interface OnekeySdkMap {
        "defaultZoom"?: number;
        "locations"?: any[];
        "mapHeight"?: string;
        "mapWidth"?: string;
        "markerIcon"?: string;
        "noCurrentLocation"?: boolean;
        "onMarkerClick"?: (event: CustomEvent<any>) => void;
        "onSetCurrentLocation"?: (event: CustomEvent<any>) => void;
        "selectedLocationIdx"?: number;
        "zoomControl"?: boolean;
    }
    interface OnekeySdkResizable {
    }
    interface OnekeySdkRoute {
        "component"?: string;
        "path"?: string;
    }
    interface OnekeySdkRouter {
    }
    interface OnekeySdkRouterLink {
        "activeClass"?: string;
        "anchorClass"?: string;
        "anchorId"?: string;
        "anchorRole"?: string;
        "anchorTabIndex"?: string;
        "anchorTitle"?: string;
        "ariaHaspopup"?: string;
        "ariaLabel"?: string;
        "ariaPosinset"?: string;
        "ariaSetsize"?: number;
        "custom"?: string;
        "url"?: string;
    }
    interface OnekeySdkSearch {
    }
    interface OnekeySdkSearchAddressItem {
        "activated"?: boolean;
        "item"?: any;
        "onSelectAddress"?: (event: CustomEvent<any>) => void;
    }
    interface OnekeySdkSearchResult {
    }
    interface OnekeySdkSwitchViewMode {
        "onSwitchViewMode"?: (event: CustomEvent<any>) => void;
    }
    interface OnekeySdkViewport {
        "onSizeChanged"?: (event: CustomEvent<any>) => void;
        "sizes"?: Object[];
    }
    interface IntrinsicElements {
        "onekey-sdk": OnekeySdk;
        "onekey-sdk-button": OnekeySdkButton;
        "onekey-sdk-doctor-card": OnekeySdkDoctorCard;
        "onekey-sdk-hcp-full-card": OnekeySdkHcpFullCard;
        "onekey-sdk-home": OnekeySdkHome;
        "onekey-sdk-icon": OnekeySdkIcon;
        "onekey-sdk-icon-arrow": OnekeySdkIconArrow;
        "onekey-sdk-icon-default-avatar": OnekeySdkIconDefaultAvatar;
        "onekey-sdk-icon-direction": OnekeySdkIconDirection;
        "onekey-sdk-icon-dislike": OnekeySdkIconDislike;
        "onekey-sdk-icon-earth": OnekeySdkIconEarth;
        "onekey-sdk-icon-edit": OnekeySdkIconEdit;
        "onekey-sdk-icon-like": OnekeySdkIconLike;
        "onekey-sdk-icon-list": OnekeySdkIconList;
        "onekey-sdk-icon-location": OnekeySdkIconLocation;
        "onekey-sdk-icon-map": OnekeySdkIconMap;
        "onekey-sdk-icon-personal": OnekeySdkIconPersonal;
        "onekey-sdk-icon-phone": OnekeySdkIconPhone;
        "onekey-sdk-icon-printer": OnekeySdkIconPrinter;
        "onekey-sdk-icon-search": OnekeySdkIconSearch;
        "onekey-sdk-icon-share": OnekeySdkIconShare;
        "onekey-sdk-loading": OnekeySdkLoading;
        "onekey-sdk-map": OnekeySdkMap;
        "onekey-sdk-resizable": OnekeySdkResizable;
        "onekey-sdk-route": OnekeySdkRoute;
        "onekey-sdk-router": OnekeySdkRouter;
        "onekey-sdk-router-link": OnekeySdkRouterLink;
        "onekey-sdk-search": OnekeySdkSearch;
        "onekey-sdk-search-address-item": OnekeySdkSearchAddressItem;
        "onekey-sdk-search-result": OnekeySdkSearchResult;
        "onekey-sdk-switch-view-mode": OnekeySdkSwitchViewMode;
        "onekey-sdk-viewport": OnekeySdkViewport;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "onekey-sdk": LocalJSX.OnekeySdk & JSXBase.HTMLAttributes<HTMLOnekeySdkElement>;
            "onekey-sdk-button": LocalJSX.OnekeySdkButton & JSXBase.HTMLAttributes<HTMLOnekeySdkButtonElement>;
            "onekey-sdk-doctor-card": LocalJSX.OnekeySdkDoctorCard & JSXBase.HTMLAttributes<HTMLOnekeySdkDoctorCardElement>;
            "onekey-sdk-hcp-full-card": LocalJSX.OnekeySdkHcpFullCard & JSXBase.HTMLAttributes<HTMLOnekeySdkHcpFullCardElement>;
            "onekey-sdk-home": LocalJSX.OnekeySdkHome & JSXBase.HTMLAttributes<HTMLOnekeySdkHomeElement>;
            "onekey-sdk-icon": LocalJSX.OnekeySdkIcon & JSXBase.HTMLAttributes<HTMLOnekeySdkIconElement>;
            "onekey-sdk-icon-arrow": LocalJSX.OnekeySdkIconArrow & JSXBase.HTMLAttributes<HTMLOnekeySdkIconArrowElement>;
            "onekey-sdk-icon-default-avatar": LocalJSX.OnekeySdkIconDefaultAvatar & JSXBase.HTMLAttributes<HTMLOnekeySdkIconDefaultAvatarElement>;
            "onekey-sdk-icon-direction": LocalJSX.OnekeySdkIconDirection & JSXBase.HTMLAttributes<HTMLOnekeySdkIconDirectionElement>;
            "onekey-sdk-icon-dislike": LocalJSX.OnekeySdkIconDislike & JSXBase.HTMLAttributes<HTMLOnekeySdkIconDislikeElement>;
            "onekey-sdk-icon-earth": LocalJSX.OnekeySdkIconEarth & JSXBase.HTMLAttributes<HTMLOnekeySdkIconEarthElement>;
            "onekey-sdk-icon-edit": LocalJSX.OnekeySdkIconEdit & JSXBase.HTMLAttributes<HTMLOnekeySdkIconEditElement>;
            "onekey-sdk-icon-like": LocalJSX.OnekeySdkIconLike & JSXBase.HTMLAttributes<HTMLOnekeySdkIconLikeElement>;
            "onekey-sdk-icon-list": LocalJSX.OnekeySdkIconList & JSXBase.HTMLAttributes<HTMLOnekeySdkIconListElement>;
            "onekey-sdk-icon-location": LocalJSX.OnekeySdkIconLocation & JSXBase.HTMLAttributes<HTMLOnekeySdkIconLocationElement>;
            "onekey-sdk-icon-map": LocalJSX.OnekeySdkIconMap & JSXBase.HTMLAttributes<HTMLOnekeySdkIconMapElement>;
            "onekey-sdk-icon-personal": LocalJSX.OnekeySdkIconPersonal & JSXBase.HTMLAttributes<HTMLOnekeySdkIconPersonalElement>;
            "onekey-sdk-icon-phone": LocalJSX.OnekeySdkIconPhone & JSXBase.HTMLAttributes<HTMLOnekeySdkIconPhoneElement>;
            "onekey-sdk-icon-printer": LocalJSX.OnekeySdkIconPrinter & JSXBase.HTMLAttributes<HTMLOnekeySdkIconPrinterElement>;
            "onekey-sdk-icon-search": LocalJSX.OnekeySdkIconSearch & JSXBase.HTMLAttributes<HTMLOnekeySdkIconSearchElement>;
            "onekey-sdk-icon-share": LocalJSX.OnekeySdkIconShare & JSXBase.HTMLAttributes<HTMLOnekeySdkIconShareElement>;
            "onekey-sdk-loading": LocalJSX.OnekeySdkLoading & JSXBase.HTMLAttributes<HTMLOnekeySdkLoadingElement>;
            "onekey-sdk-map": LocalJSX.OnekeySdkMap & JSXBase.HTMLAttributes<HTMLOnekeySdkMapElement>;
            "onekey-sdk-resizable": LocalJSX.OnekeySdkResizable & JSXBase.HTMLAttributes<HTMLOnekeySdkResizableElement>;
            "onekey-sdk-route": LocalJSX.OnekeySdkRoute & JSXBase.HTMLAttributes<HTMLOnekeySdkRouteElement>;
            "onekey-sdk-router": LocalJSX.OnekeySdkRouter & JSXBase.HTMLAttributes<HTMLOnekeySdkRouterElement>;
            "onekey-sdk-router-link": LocalJSX.OnekeySdkRouterLink & JSXBase.HTMLAttributes<HTMLOnekeySdkRouterLinkElement>;
            "onekey-sdk-search": LocalJSX.OnekeySdkSearch & JSXBase.HTMLAttributes<HTMLOnekeySdkSearchElement>;
            "onekey-sdk-search-address-item": LocalJSX.OnekeySdkSearchAddressItem & JSXBase.HTMLAttributes<HTMLOnekeySdkSearchAddressItemElement>;
            "onekey-sdk-search-result": LocalJSX.OnekeySdkSearchResult & JSXBase.HTMLAttributes<HTMLOnekeySdkSearchResultElement>;
            "onekey-sdk-switch-view-mode": LocalJSX.OnekeySdkSwitchViewMode & JSXBase.HTMLAttributes<HTMLOnekeySdkSwitchViewModeElement>;
            "onekey-sdk-viewport": LocalJSX.OnekeySdkViewport & JSXBase.HTMLAttributes<HTMLOnekeySdkViewportElement>;
        }
    }
}
