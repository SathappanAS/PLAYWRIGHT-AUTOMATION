const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /*Maximum time one test can run for. */
  timeout: 90*1000,
  expect: {

    timeout: 5000
  },

reporter: 'html',
/*share settings for all the project below.*/

use: {

  browserName:'chromium',
  headless: false,
  screenshot : 'on',  //each step  screenshot
  trace : 'on'  // each step log

},
};

module.exports=config; 