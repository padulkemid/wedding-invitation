import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import DateBlock from '../DateBlock.vue';
import Translations from '@/utils/translations';

describe('DateBlock', () => {
  it('should render', () => {
    const wrapper = mount(DateBlock);

    expect(wrapper.text()).toContain(Translations.DATE);
    expect(wrapper.text()).toContain(Translations.TIME);
    expect(wrapper.text()).toContain(Translations.LOCATION);
  });
});
