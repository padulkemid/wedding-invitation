import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import QrBlock from '../QrBlock.vue';
import Translations from '@/utils/translations';

describe('QrBlock', () => {
  const dataTests = {
    qrImage: '[data-test="qr_image"]',
  };

  it('should display qr image', () => {
    const wrapper = mount(QrBlock, {
      props: {
        qr: true,
      },
    });

    expect(wrapper.find(dataTests.qrImage).exists()).toBe(true);
  });

  it('should not display qr image and display text instead', () => {
    const wrapper = mount(QrBlock, {
      props: {
        qr: false,
      },
    });

    expect(wrapper.find(dataTests.qrImage).exists()).toBe(false);
    expect(wrapper.text()).toContain(Translations.BLESSING);
  });
});
