import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/models/ITodo';
import * as TodoActions from './../../actions/todo.actions';
import { IState as TodoState, selectDoneTodoList, selectUndoneTodoList } from './../../reducers/todo.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  public UndoneTodoList$: Observable<ITodo[]> = this.store.select(state => selectUndoneTodoList(state.todo));
  public DoneTodoList$: Observable<ITodo[]> = this.store.select(state => selectDoneTodoList(state.todo));
  public IsFetching: Observable<boolean> = this.store.select(state => state.todo.isFetching);
  constructor(private store: Store<{ todo: TodoState }>) { }

  ngOnInit() {
    this.store.dispatch(TodoActions.fetch());
  }

  onTodoToggle(todo: ITodo) {
    this.store.dispatch(TodoActions.update({
      id: todo.id,
      todo
    }));
  }

}
