// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    // './src/**/jasmine.e2e-spec.ts'
    // './src/**/app-slowmo.e2e-spec.ts'
    "./src/**/todolist.e2e-spec.ts"
  ],

  // capabilities: {
  //   browserName: "chrome",

  //   chromeOptions: {
  //     args: ["--headless", "--disable-gpu", "--window-size=800,600"]
  //   }
  // },

  multiCapabilities: [
    // {
    //   browserName: "firefox",
    //   'moz:firefoxOptions': {
    //     args: ["--headless"]
    //   }
    // },
    {
      browserName: "chrome",
      chromeOptions: {
        args: ["--headless", "--disable-gpu", "--window-size=800,600"]
      }
    }
  ],

  directConnect: true,
  baseUrl: "http://localhost:4300/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.e2e.json")
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};