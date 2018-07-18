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
  selectedItem: TodoItem;

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

  // Save the changes immediately upon change
  updateItem(currentItem: TodoItem) {
    this.todolistService.updateTodoitem(currentItem).subscribe(_ => this.getTodoItems());
  }

  selectItem(item: TodoItem) {
    this.selectedItem = item;
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

   deleteTodoItem(item: TodoItem) {
      this.todolistService.deleteTodoItem(item).subscribe(deletedItem => {
          // Remove the deleted item from the todoItems array
          this.todoItems.splice(this.todoItems.indexOf(deletedItem), 1);
          this.getTodoItems();
        }
        );
   }

}
