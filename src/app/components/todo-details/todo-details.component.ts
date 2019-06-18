import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ITodo } from 'src/app/models/ITodo';
import { IState as TodoState, selectTodo } from './../../reducers/todo.reducer';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  public Todo$: Observable<ITodo>;
  constructor(private route: ActivatedRoute, private store: Store<{ todo: TodoState }>) { }

  ngOnInit() {
    this.Todo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.store.select((state) => selectTodo(state.todo, Number(params.get('id')))
      )));
  }

}
