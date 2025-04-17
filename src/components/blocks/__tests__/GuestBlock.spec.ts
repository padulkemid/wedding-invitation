import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { capitalizeWords } from '@/utils/functions';
import { useRoute } from 'vue-router';
import Translations from '@/utils/translations';
import GuestBlock from '../GuestBlock.vue';

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({
    query: {},
  })),
}));

vi.mock('@/utils/functions', () => ({
  capitalizeWords: vi.fn((text) => text),
}));

describe('GuestBlock', () => {
  it('should render with default guest name when no query param is provided', () => {
    const wrapper = mount(GuestBlock);

    const capitalizedGuestName = capitalizeWords(Translations.DEFAULT_GUEST_NAME);

    expect(wrapper.text()).toContain(capitalizedGuestName);
  });

  it('should render with guest name from query parameter', () => {
    const mockedGuestName = 'John Doe';

    vi.mocked(useRoute).mockReturnValue({
      query: { gn: mockedGuestName },
    } as unknown as never);

    const wrapper = mount(GuestBlock);
    const expectedGreeting = capitalizeWords(mockedGuestName);

    expect(wrapper.text()).toContain(expectedGreeting);
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
