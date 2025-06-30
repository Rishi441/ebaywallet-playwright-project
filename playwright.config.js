// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000, // Maximum time one test can run for
  expect: {
    timeout: 5000, // Maximum time for expect() calls
  },
  use: {
    browserName: 'chromium', // or 'firefox', 'webkit'
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...defineConfig.use, browserName: 'chromium' },
    },
    // {
    //   name: 'Firefox',
    //   use: { ...defineConfig.use, browserName: 'firefox' },
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...defineConfig.use, browserName: 'webkit' },
    // },
  ],
  reporter: 'html', // Reporter to use. See https://playwright.dev/docs/test-reporters
});