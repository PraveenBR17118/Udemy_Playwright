// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries : 1,
  //workers :2,
  timeout : 40*1000,
  expect:
  {
    timeout : 5000
  },
  reporter : 'html',
  use: {
    
    actionTimeout: 10000,
    navigationTimeout: 10000,
    browserName: 'chromium',
    headless : true,
    screenshot : 'on',
    //trace:'on'
    trace:'reatail-on-failure' // off or on
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  },

});

module.exports = config

