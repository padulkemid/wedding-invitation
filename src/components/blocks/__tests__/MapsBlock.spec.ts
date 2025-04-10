import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import MapsBlock from '../MapsBlock.vue';
import GoogleMaps from '../embed/GoogleMaps.vue';

describe('MapsBlock', () => {
  it('should display maps with div if class provided', () => {
    const wrapper = mount(MapsBlock, {
      props: {
        class: 'test-class',
      },
    });

    expect(wrapper.findComponent('.test-class').exists()).toBe(true);
  });

  it('should display maps without div', () => {
    const wrapper = mount(MapsBlock);

    expect(wrapper.findComponent(GoogleMaps).exists()).toBe(true);
  });
});
