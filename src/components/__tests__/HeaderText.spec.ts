import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import HeaderText from '../HeaderText.vue';
import Translations from '@/utils/translations';

describe('HeaderText', () => {
  it('should render header', () => {
    const wrapper = mount(HeaderText);

    expect(wrapper.text()).toContain(Translations.HEADER_SUBTITLE);
    expect(wrapper.text()).toContain(Translations.HEADER_TITLE);
  });
});
