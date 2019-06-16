import { createAction, props } from '@ngrx/store';
import { ITodo } from '../models/ITodo';

export const fetch = createAction('[Todos Page] fetch todos');
export const receive = createAction('[Todos Page] receive todos', props<{ todos: ITodo[] }>());
