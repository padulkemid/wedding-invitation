import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import AmpersandDivider from '../AmpersandDivider.vue';

describe('AmpersandDivider', () => {
  it('should render ampersand', () => {
    const wrapper = mount(AmpersandDivider);

    expect(wrapper.text()).toContain('&');
  });
});

