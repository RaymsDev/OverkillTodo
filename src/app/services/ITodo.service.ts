import { Observable } from 'rxjs';
import { ITodo } from '../models/ITodo';

export interface ITodoService {
  List(): Observable<ITodo[]>;
  Update(todo: ITodo): Observable<ITodo>;
}
