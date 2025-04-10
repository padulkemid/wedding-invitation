import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { useRoute } from 'vue-router';
import DesktopView from '../DesktopView.vue';
import MapsBlock from '@/components/blocks/MapsBlock.vue';
import GuestBlock from '@/components/blocks/GuestBlock.vue';
import DateBlock from '@/components/blocks/DateBlock.vue';
import QrBlock from '@/components/blocks/QrBlock.vue';

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({
    query: {},
  })),
}));

describe('DesktopView', () => {
  it('should render everything in desktop', () => {
    vi.mocked(useRoute).mockReturnValue({
      query: { gn: 'padul' },
    } as unknown as never);

    const wrapper = mount(DesktopView);

    expect(wrapper.findComponent(MapsBlock).exists()).toBe(true);
    expect(wrapper.findComponent(GuestBlock).exists()).toBe(true);
    expect(wrapper.findComponent(DateBlock).exists()).toBe(true);
    expect(wrapper.findComponent(QrBlock).exists()).toBe(true);
  });
});
