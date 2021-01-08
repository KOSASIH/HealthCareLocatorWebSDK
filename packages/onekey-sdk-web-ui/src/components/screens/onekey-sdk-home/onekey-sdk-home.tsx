import { Component, h, Host, Listen } from '@stencil/core';
import { routerStore, searchMapStore, uiStore, historyStore } from '../../../core/stores';
import { t } from '../../../utils/i18n';
@Component({
  tag: 'onekey-sdk-home',
  styleUrl: 'onekey-sdk-home.scss',
  shadow: false,
})
export class OnekeySdkHome {
  @Listen('goSearchScreen')
  goSearchScreen() {
    routerStore.push('/search');
  }

  inputOnChange = (e: any) => {
    searchMapStore.setState({
      search: {
        name: e.target.value,
      },
    });
  };

  onSearch = () => {
    routerStore.push('/search');
  };

  onSubmit = e => {
    e.preventDefault();
  };

  renderHeader() {
    const { breakpoint } = uiStore.state;

    if (breakpoint.screenSize === 'desktop' || breakpoint.screenSize === 'tablet') {
      return <onekey-sdk-search searchText={t('search')} />;
    }

    return (
      <div class="header-block">
        <div class="search-home-hpc">
          <form onSubmit={this.onSubmit}>
            <input class="search-input" placeholder={t('find_healthcare_professional')} onFocus={this.onSearch} />
            <onekey-sdk-button primary icon="search" onClick={this.onSearch} class="oksdk-btn-search-address" />
          </form>
        </div>
      </div>
    );
  }

  render() {
    const { geoLocation } = searchMapStore.state;
    const { searchItems, hcpItems } = historyStore.state;
    const displayHomeMin = geoLocation.status === 'denied' && !searchItems.length && !hcpItems.length;
    return (
      <Host>
        <div class="main-contain">
          {this.renderHeader()}
          <div class="body-block">
            {
              displayHomeMin 
                ? <onekey-sdk-home-min />
                : <onekey-sdk-home-full />
            }
          </div>
        </div>
      </Host>
    );
  }
}
