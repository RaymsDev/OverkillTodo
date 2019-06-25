import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ITodo } from '../models/ITodo';
import { ITodoService } from './ITodo.service';

const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodoService {
  private static readonly url = '/api/todos';
  constructor(private httpClient: HttpClient) { }

  public List(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(TodoService.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  public Update(todo: ITodo): Observable<ITodo> {
    const url = `${TodoService.url}/${todo.id}`;
    return this.httpClient.put<ITodo>(url, todo, options)
      .pipe(
        map(() => todo),
        catchError(this.handleError)
      );
  }

  public Create(todo: Partial<ITodo>): Observable<ITodo> {
    todo.createdAt = new Date();
    return this.httpClient.post<ITodo>(TodoService.url, todo, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    // In real world => logger
    console.error(error);
    return throwError(error);
  }
}
