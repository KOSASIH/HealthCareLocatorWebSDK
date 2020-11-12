import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'onekey-sdk-router',
  styleUrl: 'onekey-sdk-router.css',
  // shadow: true,
})
export class OneKeySDKRouter {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }

}
