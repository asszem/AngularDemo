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

describe('Todolist page checkbox', () => {
  let page: TodolistPageObject;
  let validations: TodolistValidations;
  const descriptionText = 'Test for the existence of this item';

  beforeAll(() => {
    page = new TodolistPageObject();
    validations = new TodolistValidations();
    page.navigateToPage('todolist');
  });

  it('should be present for every todo item', () => {
    validations.isCheckboxPresentForEveryTodoItem();
  });

  const testDescription = 'Test for the existence of this item';

  it(`should have status Open for ${testDescription} `, () => {
    validations.isTodoItemStatus(testDescription, 'Open');
  });

  it(`should be unchecked for ${testDescription} `, () => {
    validations.isCheckboxStatus(testDescription, false);
  });

  it(`should change status to Completed when checked for ${testDescription}`, () => {
    validations.isTodoItemStatusChangedTo('Test 1', 'Completed');
  });

  it(`should change status to Open when unchecked for ${testDescription}`, () => {
    validations.isTodoItemStatusChangedTo('Test 1', 'Open');
  });
});
