import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as TodoActions from './../actions/todo.actions';
import { TodoService } from './../services/todo.service';
@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) { }

  fetchTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.fetch),
      mergeMap(() => this.todoService.List()
        .pipe(
          map(todos => TodoActions.receive({ todos })),
          catchError(() => of(TodoActions.receive({ todos: [] }))
          ))
      )));
}
