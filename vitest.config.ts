import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        provider: 'istanbul',
        include: [
          'src/**/*.{ts,js,vue}',
          '!src/**/*.d.ts',
          '!src/main.ts',
          '!src/router',
          '!src/App.vue',
          '!src/**/constants.ts',
          '!src/**/keys.ts',
          '!src/**/translations.ts',
          '!src/**/__mocks__/**',
        ],
        exclude: ['**/node_modules/**', '**/dist/**', '**/public/**', '**/*.config.{js,ts}'],
        thresholds: {
          lines: 80,
          functions: 75,
          branches: 70,
          statements: 80,
        },
        reporter: ['text', 'json', 'html'],
      },
    },
  })
);
