import { browser, by, element, $$ } from 'protractor';

export class TodolistPage {
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

  getTodoItems() {
      return element.all(by.id('todoitem'));
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

  getASpecificTodoItemByDescription(description: string) {
    return $$('td')
        .filter(
          function(elem, index) { // must return true or false
            return elem.getText().then(function(content) {
              if (content === description) {
                return true;
              } else {
                return false;
              }
            });
          } // end of function
        ); // end of filter
  }
}
