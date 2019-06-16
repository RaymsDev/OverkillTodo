import * as TodoActions from './../actions/todo.actions';
import * as TodoReducer from './todo.reducer';

const initialTodoState: TodoReducer.IState = {
  isFetching: false,
  todos: [{
    id: 1,
    isDone: true,
    name: 'todo'
  }]
};

describe('Todo Selectors', () => {
  it('should select all todos', () => {
    expect(TodoReducer.selectAllTodos(initialTodoState).length).toBe(initialTodoState.todos.length);
  });
});

describe('Todo Reducers', () => {
  it('should return actual todo list on action list', () => {
    // Act
    const actualState = TodoReducer.reducer(initialTodoState, TodoActions.fetch);
    // Assert
    expect(actualState.todos.length).toBe(initialTodoState.todos.length);
  });

  it('should be fetching on action list', () => {
    // Act
    const actualState = TodoReducer.reducer(initialTodoState, TodoActions.fetch);
    // Assert
    expect(actualState.isFetching).toBe(true);
  });

  it('should stop fetching on action receive', () => {
    // Act
    const actualState = TodoReducer.reducer(initialTodoState, TodoActions.receive({ todos: [] }));
    // Assert
    expect(actualState.isFetching).toBe(false);
  });

  it('should state is update with todos on action receive', () => {
    // Act
    const actualState = TodoReducer.reducer(initialTodoState, TodoActions.receive({
      todos: [{
        id: 1,
        name: 'todo',
        isDone: true
      }]
    }));
    // Assert
    expect(actualState.todos.length).toBe(1);
  });
});
