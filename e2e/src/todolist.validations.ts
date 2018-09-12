import { TodolistPageObject } from 'e2e/src/todolist.po';

export class TodolistValidations {
  isDescriptionPresent(description: string, page: TodolistPageObject) {
    expect(
      page.getASpecificTodoItemByDescription(description).count()
    ).toBeGreaterThan(0);
  }
}
