import { browser, protractor, by } from 'protractor';
import { TodolistPageObject } from './todolist.po';
import { TodolistValidations } from './todolist.validations';

describe('Todolist page', () => {
  let page: TodolistPageObject;
  let validations: TodolistValidations;

  beforeAll(() => {
    page = new TodolistPageObject();
    validations = new TodolistValidations();
    page.navigateToPage('todolist');
  });

  it('should have a title \'András To Do List\'', () => {
    validations.isPageTitle('(András\'s To Do List');
  });

  it('should have more than 5 todo items', () => {
    validations.isTodoItemsCountGreaterThan(5);
  });

  it('should have the last todoitem in Open status', () => {
    validations.isLastTodoItemOpen();
  });

  const descriptionText = 'Test for the existence of this item';
  it(`should contain one or more items with the text [${descriptionText}]`, () => {
    validations.isDescriptionPresent(descriptionText);
  });
});

describe('Todolist page checkboxes', () => {
  let page: TodolistPageObject;

  beforeAll(() => {
    page = new TodolistPageObject();
    page.navigateToPage('todolist');
  });

  it('should be present', () => {
    // TODO: implement this
  });

  xit('should changes status to Completed when checked', () => {
    // TODO: implement this
  });

  xit('should changes status to Open when unchecked', () => {
    // TODO: implement this
  });
});
