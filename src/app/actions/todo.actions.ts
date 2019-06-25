import { createAction, props } from '@ngrx/store';
import { ITodo } from '../models/ITodo';

export const fetch = createAction('[Todos Page] fetch todos');
export const receive = createAction('[Todos Page] receive todos', props<{ todos: ITodo[] }>());
export const update = createAction('[Todos Page] update todo', props<{ id: number, todo: ITodo }>());
export const updated = createAction('[Todos Page] update todo success', props<{ todo: ITodo }>());
export const updateFail = createAction('[Todos Page] update todo fail');
export const create = createAction('[Todos Page] create todo', props<{ todo: Partial<ITodo> }>());
export const created = createAction('[Todos Page] create todo success', props<{ todo: ITodo }>());
export const createFail = createAction('[Todos Page] create todo fail');
