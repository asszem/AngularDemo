import { Injectable } from '@angular/core';
import { TodoItem } from './todoitem';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  url = 'http://localhost:3100/todoitems';

  constructor(private httpClient: HttpClient) { }

  getTodoitems(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(this.url, { responseType: 'json' }).pipe(catchError(this.handleError));
  }

  updateTodoitem(item: TodoItem): Observable<TodoItem> {
    const url = this.url + '/' + item.id;
    return this.httpClient.put<TodoItem>(url, item).pipe(catchError(this.handleError));
  }

  addTodoItem(item: TodoItem): Observable<TodoItem> {
    return this.httpClient.post<TodoItem>(this.url, item).pipe(catchError(this.handleError));
  }

  deleteTodoItem(item: TodoItem): Observable<TodoItem> {
    return this.httpClient.delete<TodoItem>(this.url + '/' + item.id).pipe(catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    console.error('CustomerService::handleError', error);
    return observableThrowError(error);
  }
}
