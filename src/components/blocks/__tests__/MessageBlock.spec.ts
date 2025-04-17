import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import MessageBlock from '../MessageBlock.vue';
import Translations from '@/utils/translations';

describe('MessageBlock', () => {
  it('should render the messages', () => {
    const wrapper = mount(MessageBlock);

    expect(wrapper.text()).toContain(Translations.MESSAGE_BRIDE_NAME);
    expect(wrapper.text()).toContain(Translations.MESSAGE_GROOM_NAME);
  });
});
