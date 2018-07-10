import { Component, OnInit } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  model = new Model();
  hideCompleted = false;

  constructor() { }

  ngOnInit() {
  }

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    if (this.hideCompleted) {
      return this.model.items.filter(item => !item.itemCompleted);
    } else {
      return this.model.items;
    }
  }

  toggleHideCompleted() {
    this.hideCompleted === true ? this.hideCompleted = false : this.hideCompleted = true;
  }


  addItem(newTodoItem: String) {
    if (newTodoItem !== '') {
      this.model.items.push(new TodoItem(newTodoItem, false));
    }
  }

}
