// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// packages to be installed
// fs-extra  https://www.npmjs.com/package/fs-extra
// jasmine-reporters  https://www.npmjs.com/package/jasmine-reporters
// protractor-html-reporter https://www.npmjs.com/package/protractor-html-reporter

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    // './src/**/*.e2e-spec.ts'
    // './src/**/todolist.e2e-spec.ts'
    './src/**/todolist-flat.e2e-spec.ts'
    // './src/**/index.e2e-spec.ts'
  ],
  multiCapabilities: [
    // {
    //   browserName: "firefox",
    //   'moz:firefoxOptions': {
    //     args: ["--headless"]
    //   }
    // },
    {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless', '--disable-gpu', '--window-size=800,600']
      }
    }
  ],

  directConnect: true,
  baseUrl: 'http://localhost:4300/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });

    // fs is a filesystem improvement used when creating screenshots
    var fs = require('fs-extra'); // https://www.npmjs.com/package/fs-extra

    // creating screenshots
    jasmine.getEnv().addReporter({
      specDone: function(result) {
        // only when result is failed
        // if (!result.status == 'failed') {
        browser.getCapabilities().then(function(caps) {
          var browserName = caps.get('browserName');
          browser.takeScreenshot().then(function(png) {
            var stream = fs.createWriteStream(
              'e2e/output/screenshots/' +
                browserName +
                '-' +
                result.fullName +
                '.png'
            );
            stream.write(new Buffer(png, 'base64'));
            stream.end();
          });
        });
        // }
      }
    });
    // Report - Generate XML report
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './e2e/output/',
        filePrefix: 'xmlresults'
      })
    );
    // Report - Generate report to the console
    const { SpecReporter } = require('jasmine-spec-reporter');
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function(caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');

      var HTMLReport = require('protractor-html-reporter-2');

      testConfig = {
        reportTitle: 'Angular Demo Protractor E2E Test Execution Report',
        outputPath: './e2e/output/',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: false
      };
      new HTMLReport().from('e2e/output/xmlresults.xml', testConfig);
    });
  }
};
