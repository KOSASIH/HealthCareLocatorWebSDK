import { Component, Host, h, State, Listen, Prop } from '@stencil/core';
import { searchDoctor, searchLocationWithParams } from '../../../core/api/hcp';
import { searchMapStore, routerStore, uiStore, historyStore } from '../../../core/stores';
import debounce from 'lodash.debounce';
import cls from 'classnames';
import { searchGeoMap } from '../../../core/api/searchGeo';
import { NEAR_ME, NEAR_ME_ITEM } from '../../../core/constants';
import { ROUTER_PATH } from '../../onekey-sdk-router/constants';
import { HistorySearchItem } from '../../../core/stores/HistoryStore';
import { t } from '../../../utils/i18n';

@Component({
  tag: 'onekey-sdk-search',
  styleUrl: 'onekey-sdk-search.scss',
  shadow: false,
})
export class OnekeySdkSearch {
  nameInput!: HTMLInputElement;
  addressInput!: HTMLInputElement;

  @State() searchResult = [];
  @State() selectedAddress: any = {};
  @State() selectedDoctor: any = {};
  @State() currentSelectedInput: string;
  @Prop() noIcon: boolean;
  @Prop() searchText: string;
  @Prop() showSwitchMode?: boolean = false;

  fields = {
    name: null,
    address: null,
  };

  private onSearch = async e => {
    e.preventDefault();

    const { name } = e.target;
    this.checkValidElm(name);

    if (name.value) {
      if(routerStore.state.currentRoutePath !== ROUTER_PATH.SEARCH_RESULT) {
        routerStore.push(ROUTER_PATH.SEARCH_RESULT);
      } else {
        searchLocationWithParams()
      }
      // store search to history
      const historySearchItem: HistorySearchItem = {
        id: String(Date.now()),
        type: 'search',
        locationFilter: searchMapStore.state.locationFilter,
        specialtyFilter: searchMapStore.state.specialtyFilter,
        searchFields: searchMapStore.state.searchFields,
        timestamp: Date.now()
      }
      historyStore.addItem('search', historySearchItem);
    }
  };

  checkValidElm = elm => {
    if (!elm.value) {
      elm.classList.add('error');
    } else {
      elm.classList.remove('error');
    }
  };

  onChange = debounce(async e => {
    const inputName = e.path[0].name;
    const inputValue = e.path[0].value;
    this.checkValidElm(e.path[0]);
    if (inputValue) {
      inputName === 'name'
        ? await searchDoctor({
            criteria: inputValue,
          })
        : await searchGeoMap({
            id: inputValue,
          });
    }
  }, 500);

  handleFieldInput = e => {
    const el = e.target;
    searchMapStore.setSearchFieldValue(el.name, el.value);
    this.clearFilter(el.name);
    this.onChange(e);
  };

  @Listen('selectAddress')
  onSelectAddress(e) {
    const item = e.detail;
    // "Near Me" special Case
    if (item.id === NEAR_ME) {
      searchMapStore.setSearchFieldValue('address', t('near_me'));
      searchMapStore.setState({
        locationFilter: item,
      });
      if (searchMapStore.state.searchFields.name === '') {
        this.fields.name.querySelector('input').focus();
      }
      return;
    }
    if (this.currentSelectedInput === 'address') {
      searchMapStore.setSearchFieldValue('address', item.name);
      searchMapStore.setState({
        locationFilter: item,
      });
    } else {
      if (item.professionalType) {
        searchMapStore.setState({
          selectedActivity: {
            ...item.activity,
            name: item.name,
            lat: item.activity.workplace.address.location.lat,
            lng: item.activity.workplace.address.location.lon
          }
        });
        routerStore.push('/search-result');
      } else {
        // on click Specialty item
        searchMapStore.setSearchFieldValue('name', item.name);
        searchMapStore.setState({
          specialtyFilter: item,
        });
      }
    }

    this.resetDataResult();
    this.currentSelectedInput = null;
  }

  resetDataResult = () => {
    searchMapStore.setState({
      searchDoctor: [],
      specialties: [],
    });
  };

  renderContent = data => {
    return (
      <div class={`oksdk-search__dropdown ${this.currentSelectedInput}`}>
        {data && data.map(item => <onekey-sdk-search-address-item item={item} currentSearchText={searchMapStore.state.searchFields.name} />)}
      </div>
    );
  };

  clearFilter = (key: string) => {
    if (key === 'name') {
      searchMapStore.setState({
        specialtyFilter: null
      });
    } else if (key === 'address') {
      searchMapStore.setState({
        locationFilter: null
      });
    }
  }

  resetValue = (key, focusField = false) => {
    searchMapStore.setSearchFieldValue(key, '');
    this.clearFilter(key);
    if (focusField) {
      this.fields[key].querySelector('input').focus();
    }
  };

  resetInputValue = () => {
    this.resetValue('name');
    this.resetValue('address');
  };

  onFocusInputSearch = e => {
    const name = (e.target as any).name;
    if (name) {
      this.currentSelectedInput = name;
    }
  };

  onBlurInputSearch = () => {
    if (uiStore.state.breakpoint.screenSize === 'mobile') {
      return;
    }
    // this.currentSelectedInput = null;
  };

  getViewSize = () => {
    const isSmallView = uiStore.state.breakpoint.screenSize === 'mobile';
    return {
      isSmallView,
    };
  };

  renderAutocompleteMobile = (searchDoctorData, addressAutocompletionData) => {
    const addressResults = this.insertDefaultAddressNearMe([...addressAutocompletionData]);
    if (this.currentSelectedInput === 'name' && searchMapStore.state.searchFields.name.length > 0) {
      return <div class="body-block">{searchDoctorData.length > 0 && this.renderContent(searchDoctorData)}</div>;
    }
    if (this.currentSelectedInput === 'address') {
      return <div class="body-block">{this.renderContent(addressResults)}</div>;
    }
    if (addressResults.length && addressResults[0].id !== NEAR_ME_ITEM.id) {
      return <div class="body-block">{this.renderContent([NEAR_ME_ITEM])}</div>;
    }
    return null;
  };

  renderAutocompleteField = (fieldName, data) => {
    if (fieldName !== this.currentSelectedInput) {
      return null;
    }

    if (this.currentSelectedInput === 'name') {
      return <div>{data.length > 0 && this.renderContent(data)}</div>;
    } 
    if (this.currentSelectedInput === 'address') {
      const addressResults = this.insertDefaultAddressNearMe([...data]);
      return <div>{addressResults.length > 0 && this.renderContent(addressResults)}</div>;
    }
    return null;
  };

  insertDefaultAddressNearMe(addressResults: any[]) {
    const searchMapState = searchMapStore.state;

    const nearMeFound = searchMapState.locationFilter?.id === NEAR_ME;
    if (
      !nearMeFound && 
      !searchMapState.searchFields.address.length && 
      searchMapState.geoLocation.status === 'denied'
    ) {
      return [NEAR_ME_ITEM, ...addressResults];
    }
    return addressResults;
  }

  render() {
    const selectedDoctorName = searchMapStore.state.selectedValues?.name?.name;
    const searchDoctorData = searchMapStore.state?.searchDoctor.length > 0 && searchMapStore.state?.searchDoctor;
    const selectedAddressName = searchMapStore.state.selectedValues?.address?.name;
    const addressAutocompletionData = searchMapStore.state.searchGeo;

    const isSmallView = this.getViewSize().isSmallView;
    const nameInputLoading = this.currentSelectedInput === 'name' && searchMapStore.state.loading;
    const addressInputLoading = this.currentSelectedInput === 'address' && searchMapStore.state.loading;
    const resetSearchClass = cls('reset-search', {
      hide: !selectedDoctorName && !selectedAddressName,
    });

    return (
      <Host>
        <div class="main-contain">
          <div class="oksdk-search">
            <div class="oksdk-search__container">
              <onekey-sdk-router-link url="/" class="oksdk-btn-search-back">
                <onekey-sdk-icon name="arrow" width={25} height={25} color="black" />
              </onekey-sdk-router-link>
              <form class="oksdk-search__form" onSubmit={this.onSearch}>
                <div class="oksdk-search__form--content">
                  <div class="oksdk-search__form--content-item">
                    <onekey-sdk-input
                      ref={el => (this.fields.name = el)}
                      postfixIcon={searchMapStore.state.searchFields.name ? 'remove' : ''}
                      name="name"
                      value={searchMapStore.state.searchFields.name}
                      placeholder={t('search_first_field_label')}
                      onInput={this.handleFieldInput}
                      autoComplete="off"
                      loading={nameInputLoading}
                      onPostfixClick={() => this.resetValue('name', true)}
                      autoFocus
                      onFocus={this.onFocusInputSearch}
                      onBlur={this.onBlurInputSearch}
                    >
                      {!isSmallView && this.renderAutocompleteField('name', searchDoctorData)}
                    </onekey-sdk-input>
                  </div>
                  <div class="oksdk-search__form--content-item">
                    <onekey-sdk-input
                      ref={el => (this.fields.address = el)}
                      postfixIcon={searchMapStore.state.searchFields.address ? 'remove' : ''}
                      name="address"
                      value={searchMapStore.state.searchFields.address}
                      placeholder={t('search_second_field_label')}
                      onInput={this.handleFieldInput}
                      autoComplete="off"
                      loading={addressInputLoading}
                      onPostfixClick={() => this.resetValue('address', true)}
                      onFocus={this.onFocusInputSearch}
                      onBlur={this.onBlurInputSearch}
                    >
                      {!isSmallView && this.renderAutocompleteField('address', addressAutocompletionData)}
                    </onekey-sdk-input>
                  </div>
                </div>
                <onekey-sdk-button 
                  primary 
                  type="submit" 
                  icon={this.searchText ? undefined : 'search'} 
                  class="oksdk-btn-search-address"
                >{this.searchText}</onekey-sdk-button>
              </form>
              <div class={resetSearchClass} onClick={this.resetInputValue}>
                <span>Reset search</span>
              </div>
              <div>
                <slot></slot>
                {this.showSwitchMode && (
                  <div class="switch-mode">
                    <onekey-sdk-switch-view-mode typeOfLabel="short" />
                  </div>
                )}
              </div>
            </div>
          </div>
          {isSmallView && this.renderAutocompleteMobile(searchDoctorData, addressAutocompletionData)}
        </div>
      </Host>
    );
  }
}
