import StoreProvider from './StoreProvider';
import { DEFAULT_CONFIGURATION, OnekeySDKConfig } from 'onekey-sdk-core';

export enum ModeViewType {
  "LIST" = "LIST",
  "MAP" = "MAP"
}

export interface Modal {
  title: string;
  component: string;
  className?: string;
}

export interface OneKeySDKConfigData {
  markerIcon?: string;
  markerIconCurrentLocation?: string;
  input?: OnekeySDKConfig;
  modeView?: ModeViewType;
  homeMode?: 'full' | 'min';
  i18nBundlesPath?: string;
  modal?: Modal;
  entry?: any;
}

export const initStateConfigStore = {
  // User input config
  input: DEFAULT_CONFIGURATION,
  modeView: ModeViewType.LIST,
  modal: undefined
};

class ConfigStore extends StoreProvider<OneKeySDKConfigData> {}

export default ConfigStore;
