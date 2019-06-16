import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../models/ITodo';
import { ITodoService } from './ITodo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodoService {

  constructor(private httpClient: HttpClient) { }

  public List(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>('/api/todos');
  }
}
