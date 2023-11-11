import { defineConfig, mergeConfig } from 'vitest/config';
import { configShared } from '../../vitest.shared';

const localConfig = defineConfig({
  test: {
    environment: 'jsdom',
  },
});

export default mergeConfig(configShared, localConfig);
