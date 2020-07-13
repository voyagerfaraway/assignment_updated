// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  suites: {
    nested_frames: './specs/nested_frames.js',
    dynamic_loading: './specs/dynamic_loading.js',
    upload: './specs/upload.js'
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare() {
    beforeEach(function(){
      browser.waitForAngularEnabled(false);
    });
  }
};
