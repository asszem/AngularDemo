import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { TodoItem } from './todoitem';
import { TodolistService } from './todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  hideCompleted = false;
  todoItems: TodoItem[];

  // Instantiate the todolistService in constructor so that it can be used
  constructor(private todolistService: TodolistService) { }

  ngOnInit() {
    this.getTodoItems();
  }

  getName() {
    return 'András';
  }

  getTodoItems() {
    if (this.hideCompleted) {
      return this.todolistService.getTodoitems().subscribe((items => this.todoItems = items.filter(item => !item.status)));
    } else {
      return this.todolistService.getTodoitems().subscribe(items => this.todoItems = items);
    }
  }

  toggleHideCompleted() {
    this.hideCompleted === true ? this.hideCompleted = false : this.hideCompleted = true;
    this.getTodoItems();
  }

  // Save the status immediately upon change
  toggleItemStatus(currentItem: TodoItem) {
    this.todolistService.updateTodoitemStatus(currentItem).subscribe(_ => this.getTodoItems());
  }

  addTodoItem(newTodoItemDescription: String) {
     if (newTodoItemDescription !== '') {
       const newTodoItem = new TodoItem();
       newTodoItem.description = newTodoItemDescription;
       newTodoItem.status = false;
       newTodoItem.id = uuid();
       this.todolistService.addTodoItem(newTodoItem).subscribe(newTodoItemReceived => this.todoItems.push(newTodoItemReceived));
     }
   }

}
