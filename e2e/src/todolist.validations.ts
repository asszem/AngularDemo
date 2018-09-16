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

  isCheckboxStatus(description: string, expectedStatus: boolean) {
    this.getACheckBoxStatus(description)
      .then((result) => {
        expect(result).toBe(expectedStatus);
      });
  }

  isTodoItemStatus(description: string, expectedStatus: string) {
    this.getATodoItemStatus(description)
      .then((result) => {
        expect(result).toBe(expectedStatus);
      });
  }

  isTodoItemStatusChangedTo(description: string, newStatus?: string) {
    // verify if checkbox is unchecked
    // verify if status is Open

    this.toggleCheckbox(description);
    this.getATodoItemStatus(description).then((isChecked) => {
      expect(isChecked).toBe(newStatus);
    });
  }
}
