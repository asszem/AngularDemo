import { TodolistPageObject } from './todolist.po';
import { by } from 'protractor';

export class TodolistValidations extends TodolistPageObject {
  // private page: TodolistPageObject;

  // constructor() {
  //   super();
  // }

  isPageTitle(title: string) {
    expect(this.getTitleText()).toEqual('András\'s To Do List');
  }

  isDescriptionPresent(description: string) {
    expect(
      this.getASpecificTodoItemByDescription(description).count()
    ).toBeGreaterThan(0);
  }

  isLastTodoItemOpen() {
    expect(
      this.getElementsById('todoItems')
        .last()
        .all(by.css('td'))
        .last()
        .getText()
    ).toEqual('Open');
  }

  isTodoItemsCountGreaterThan(number: number) {
    expect(this.getElementsById('todoItems').count()).toBeGreaterThan(number);
  }
}
