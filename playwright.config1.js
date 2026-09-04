// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { permission } from 'process';

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
  workers :2,
  timeout : 40*1000,
  expect:
  {
    timeout : 5000
  },
  reporter : 'html',
  projects :[
    {
      name : 'safari',
      use: {
    
        actionTimeout: 10000,
        navigationTimeout: 10000,
        browserName: 'webkit',
        headless : true,
        screenshot : 'off',
        //trace:'on'
        trace:'retain-on-failure', // off or on
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
       // ...devices['iPhone 11 Pro Max'],
    
      },
    },
    {
      name :'chrome',
      use: {
    
        actionTimeout: 10000, 
        navigationTimeout: 10000,
        browserName: 'chromium',
        headless : true,
        screenshot : 'on',
        video:'retain-on-failure',
        //ignorehttpsErrors:true,
        //permissions:['geolocation'],
        //trace:'on'
        trace:'retain-on-failure', // off or on
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        //viewport : {width:720,height:720}
        //...devices['Pixel 10 Pro'],

    
      },
    }
    

  ]
  

});

module.exports = config

