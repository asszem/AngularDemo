import { browser, protractor, by } from 'protractor';
import { TodolistPage } from './todolist.po';

describe('Todolist page', () => {
  let page: TodolistPage;

  beforeAll(() => {
    page = new TodolistPage();
    page.navigateToPage('todolist');
  });

  it('should have a title \'András To Do List\'', () => {
    expect(page.getTitleText()).toEqual('András\'s To Do List');
  });

  it('should have more than five todo items', () => {
    expect(page.getElementsById('todoItems').count()).toBeGreaterThan(5);
  });

  it('should have the last todoitem in Open status', () => {
    expect(
      page
        .getElementsById('todoItems')
        .last()
        .all(by.css('td'))
        .last()
        .getText()
    ).toEqual('Open');
  });

  const descriptionText = 'Test for the existence of this item';
  it(`should contain one or more items with the text [${descriptionText}]`, () => {
    expect(
      page.getASpecificTodoItemByDescription(descriptionText).count()
    ).toBeGreaterThan(0);
  });
});

describe('Todolist page checkboxes', () => {
  let page: TodolistPage;

  beforeAll(() => {
    page = new TodolistPage();
    page.navigateToPage('todolist');
  });

  it('should be present', () => {
    // TODO: implement this
  });
});
