import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/models/ITodo';
import * as TodoActions from './../../actions/todo.actions';
import { IState as TodoState, selectAllTodos } from './../../reducers/todo.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {


  public Todos$: Observable<ITodo[]> = this.store.select(state => selectAllTodos(state.todo));
  public IsFetching: Observable<boolean> = this.store.select(state => state.todo.isFetching);
  constructor(private store: Store<{ todo: TodoState }>) { }

  ngOnInit() {
    this.store.dispatch(TodoActions.fetch());
  }

}
