import { TodolistPageObject } from './todolist.po';
import { by } from 'protractor';

export class TodolistValidations extends TodolistPageObject {

  isPageTitle(title: string) {
    expect(this.getTitleText()).toEqual('András\'s To Do List');
  }

  isDescriptionPresent(description: string) {
    // expect(
    //   this.getASpecificTodoItemByDescription(description).count()
    // ).toBeGreaterThan(0);
    expect(
      this.getATodoItemRowByDescription(description).count()
    ).toBeGreaterThan(0);
  }

  isLastTodoItemOpen() {
    expect(
      this.getElementsByCSS('.todoItems')
        .last()
        .all(by.css('td'))
        .last()
        .getText()
    ).toEqual('Open');
  }

  isTodoItemsCountGreaterThan(number: number) {
    expect(this.getElementsByCSS('.todoItems').count()).toBeGreaterThan(number);
  }

  isCheckboxPresentForEveryTodoItem() {
    const todoItemCount = this.getElementsByCSS('.todoItems');
    const todoCheckboxCount = this.getElementsByCSS('.todoItemCheckbox');
    expect(todoItemCount.count()).toEqual(todoCheckboxCount.count());
  }

  isStatusChangedTo(description: string, newStatus?: string) {
    // verify if checkbox is unchecked
    // verify if status is Open
    // press checkbox
    this.toggleCheckbox(description, 'checked');
    // verify if status changed to Completed
  }
}
