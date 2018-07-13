import { Component, OnInit } from '@angular/core';
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

  // Instantiate the todolistService in constructo so that it can be used
  constructor(private todolistService: TodolistService) { }

  ngOnInit() {
    this.getTodoItems();
  }

  getName() {
    return 'András';
  }

  getTodoItems() {
    // return this.todolistService.getTodoitems().subscribe(items => this.todoItems = items);
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

  // Save the status immediately uppon change
  toggleItemStatus(currentItem: TodoItem) {
    console.log('item status original: ' + currentItem.status);
    this.todolistService.updateTodoitemStatus(currentItem).subscribe(_ => this.getTodoItems());
  }



  // addItem(newTodoItem: String) {
  //   if (newTodoItem !== '') {
  //     this.model.items.push(new TodoItem(newTodoItem, false));
  //   }
  // }

}
