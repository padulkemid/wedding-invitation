import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import FooterText from '../FooterText.vue';
import Translations from '@/utils/translations';

describe('FooterText', () => {
  it('should render footer', () => {
    const wrapper = mount(FooterText);

    expect(wrapper.text()).toContain(Translations.FOOTER_TEXT);
  });
});
