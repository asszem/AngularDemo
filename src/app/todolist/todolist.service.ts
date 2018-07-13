import { Injectable } from '@angular/core';
import { Model, TodoItem } from './model';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  url = 'http://localhost:3000/todoitems';

  constructor(private httpClient: HttpClient) { }

  getTodoitems(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(this.url, { responseType: 'json' }).pipe(catchError(this.handleError));
  }

  updateTodoitemStatus(item: TodoItem): Observable<TodoItem> {
    const url = this.url + '/' + item.id;
    return this.httpClient.put<TodoItem>(url, item).pipe(catchError(this.handleError));
  }

  // This error handling is only for basic usage, a real world application should use proper error handling
  private handleError(error: Response | any) {
    console.error('CustomerService::handleError', error);
    return observableThrowError(error);
  }
}
