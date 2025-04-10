import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { capitalizeWords } from '@/utils/functions';
import { useRoute } from 'vue-router';
import Translations from '@/utils/translations';
import Keys from '@/utils/keys';
import GuestBlock from '../GuestBlock.vue';

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({
    query: {},
  })),
}));

vi.mock('@/utils/functions', () => ({
  capitalizeWords: vi.fn((text) => text.toUpperCase()),
}));

describe('GuestBlock', () => {
  it('should render with default guest name when no query param is provided', () => {
    const wrapper = mount(GuestBlock);

    const expectedGreeting = Translations.GUEST_GREETING.replace(
      Keys.GUEST_NAME,
      capitalizeWords(Translations.DEFAULT_GUEST_NAME)
    );

    expect(wrapper.find('h2').exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe(expectedGreeting);
  });

  it('should render with guest name from query parameter', () => {
    vi.mocked(useRoute).mockReturnValue({
      query: { gn: 'john doe' },
    } as unknown as never);

    const wrapper = mount(GuestBlock);

    const expectedGreeting = Translations.GUEST_GREETING.replace(
      Keys.GUEST_NAME,
      capitalizeWords('john doe')
    );

    expect(wrapper.find('h2').text()).toBe(expectedGreeting);
  });

  it('should apply class passed via props', () => {
    const customClass = 'custom-greeting';
    const wrapper = mount(GuestBlock, {
      props: {
        class: customClass,
      },
    });

    expect(wrapper.classes()).toContain(customClass);
  });
});
