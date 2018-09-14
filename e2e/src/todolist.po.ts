import { browser, by, element, $$, ElementArrayFinder, ElementFinder } from 'protractor';

export class TodolistPageObject {
  navigateTo() {
    return browser.get('/');
  }

  navigateToPage(path: string) {
    return browser.get(path);
  }

  getTitleText() {
    return element(by.className('bg-primary p-a-1')).getText();
  }

  // by.repeater is not working for ngFor, use workaround instead, by assigning an ID for each repeated element
  // source: https://stackoverflow.com/questions/43466476/protractor-ngfor-loop
  getElementsById(id: string) {
    return element.all(by.id(id));
  }

  // $$() is a shortcut for element.all(by.css())
  getElementsByCSS(css: string) {
    return $$(css);
  }

  // by.model and by.binding locators are not supported in Angular2
  // https://github.com/angular/protractor#compatibility
  getModel(modelName: string) {
    return element(by.model(modelName));
  }

  getATodoItemRowByDescription(targetDescription: string): ElementArrayFinder {
    return $$('.todoItems').filter(function(todoItemTR, index) {
      return todoItemTR
        .element(by.css('.todoItemDescription'))
        .getText()
        .then(function(currentDescription) {
          if (targetDescription === currentDescription) {
            return true;
          } else {
            return false;
          }
        });
    });
  }

  toggleCheckbox(checkboxDescription: string, status: string) {
    // const checkbox = this.getATodoItemRowByDescription(checkboxDescription).findElement(by.css('.todoItemCheckbox'));

    // let checkbox: ElementFinder;

    this.getATodoItemRowByDescription(checkboxDescription).then(function(todoItemTRs: ElementFinder[]) {
      console.log('todoItemRows found: ' + (todoItemTRs.length) );
      console.log('found tr description: ' + todoItemTRs[0]);
      // this.checkbox = todoItemTR[0];
    });

    element.all(by.css('.todoItemCheckbox')).then(function(elements) {
      console.log('checkboxes found:' + elements.length);
      elements[0].click();
    });

    // if (status === 'checked') {
    //   if (!checkbox.isEnabled) {
    //     console.log('checking checkbox');
    //     checkbox.sendKeys();
    //   }
    // } else if (status === 'unchecked') {
    //   if (checkbox.isEnabled) {
    //     checkbox.sendKeys();
    //   }
    // }
  }
}
