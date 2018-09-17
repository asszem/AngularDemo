import { AppPage } from './app.po';
import { browser, protractor, element, by } from 'protractor';

// This slows down test executin
// Source: https://neoteric.eu/start-to-start-working-with-protractor-and-run-your-first-e2e-test/

// const origFn = browser.driver.controlFlow().execute;

// browser.driver.controlFlow().execute = function() {
//   const args = arguments;

//   // queue 100ms wait
//   origFn.call(browser.driver.controlFlow(), function() {
//     return protractor.promise.delayed(100);
//   });

//   return origFn.apply(browser.driver.controlFlow(), args);
// };

describe('Testing Index.hu', () => {
  it('should display \'Belföld\' in top navigation bar', () => {
    browser.waitForAngularEnabled(false);
    browser.get('http://index.hu');
    element(by.className('navi_belfold')).getText();
  });
});

describe('OUTERDESCRIBE', () => {
  describe('INNERDESCRIBE', () => {
    it('IT', () => {
      browser.waitForAngularEnabled(false);
      browser.get('http://index.hu');
      element(by.className('navi_belfold')).getText();
    });
  });
});
