import { browser, by, element, $$, ElementArrayFinder, ElementFinder, promise } from 'protractor';

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

  protected getATodoItemRowByDescription(targetDescription: string): ElementArrayFinder {
    return $$('.todoItems').filter(function (todoItemTR, index) {
      return todoItemTR
        .element(by.css('.todoItemDescription'))
        .getText()
        .then(function (currentDescription) {
          if (targetDescription === currentDescription) {
            return true;
          } else {
            return false;
          }
        });
    });
  }

  protected getACheckBoxStatus(checkboxDescription: string): promise.Promise<boolean> {

    return this.getATodoItemRowByDescription(checkboxDescription)
      .then((todoItemTR: ElementFinder[]) => {
        return todoItemTR[0].element(by.css('.todoItemCheckbox')).isSelected();
      });
  }

  public toggleCheckbox(checkboxDescription: string) {
    this.getATodoItemRowByDescription(checkboxDescription)
      .then((todoItemTR: ElementFinder[]) => {
        todoItemTR[0].element(by.css('.todoItemCheckbox')).click();
      });

  }

  protected getATodoItemStatus(checkboxDescription: string): promise.Promise<string> {

    return this.getATodoItemRowByDescription(checkboxDescription)
      .then((todoItemTR: ElementFinder[]) => {
        return todoItemTR[0].element(by.css('.todoItemStatus')).getText();
      });
  }
}
