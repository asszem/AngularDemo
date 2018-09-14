import { browser, protractor, by } from 'protractor';
import { TodolistPageObject } from './todolist.po';
import { TodolistValidations } from './todolist.validations';

describe('Todolist page', () => {
  let page: TodolistPageObject;
  let validations: TodolistValidations;
  const descriptionText = 'Test for the existence of this item';

  beforeAll(() => {
    page = new TodolistPageObject();
    validations = new TodolistValidations();
    page.navigateToPage('todolist');
  });

  describe('todoitems', () => {
    it(`should have a title András' To Do List`, () => {
      validations.isPageTitle(`(András's To Do List`);
    });

    it('should have more than 5 todo items', () => {
      validations.isTodoItemsCountGreaterThan(5);
    });

    it('should have the last todoitem in Open status', () => {
      validations.isLastTodoItemOpen();
    });

    it(`should contain one or more items with the text [${descriptionText}]`, () => {
      validations.isDescriptionPresent(descriptionText);
    });
  });

  describe('checkboxes', () => {
    it('should be present for every todo item', () => {
      validations.isCheckboxPresentForEveryTodoItem();
    });

    it('should changes status to Completed when checked', () => {
      validations.isStatusChangedTo('Test 1', 'Completed');
      // validations.isStatusChangedTo('Test 2', 'Open');
      // validations.isStatusChangedTo(descriptionText, 'Completed');
    });

    xit('should changes status to Open when unchecked', () => {
      // TODO: implement this
    });
  });
});
