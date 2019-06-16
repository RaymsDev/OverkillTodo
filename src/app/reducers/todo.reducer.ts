import { Action, createReducer, on } from '@ngrx/store';
import { ITodo } from '../models/ITodo';
import * as TodoActions from './../actions/todo.actions';

export interface IState {
  isFetching: boolean;
  todos: ITodo[];
}

export const initialState: IState = {
  isFetching: false,
  todos: [{
    id: 1,
    isDone: true,
    name: 'First todo'
  },
  {
    id: 2,
    isDone: false,
    name: 'Second todo'
  },
  {
    id: 3,
    isDone: false,
    name: 'Third todo'
  }]
};

const todoReducer = createReducer(
  initialState,
  on(TodoActions.fetch, state => ({ ...state, isFetching: true })),
  on(TodoActions.receive, (state, action) => ({ ...state, isFetching: false, todos: [...action.todos] })),
  on(TodoActions.toggle, (state, action) => ({
    ...state, todos: [...state.todos.map(todo => {
      if (todo.id === action.todoId) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    })]
  })),
);

export function reducer(state: IState, action: Action) {
  return todoReducer(state, action);
}

export const selectAllTodos = (state: IState) => state.todos;
export const selectDoneTodoList = (state: IState) => state.todos.filter(todo => todo.isDone);
export const selectUndoneTodoList = (state: IState) => state.todos.filter(todo => !todo.isDone);
