import { defineConfig } from 'vitest/config';
export const configShared = defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
  },
});
