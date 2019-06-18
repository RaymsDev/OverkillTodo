import * as TodoActions from './../actions/todo.actions';
import * as TodoReducer from './todo.reducer';

describe('Todo Selectors', () => {
  let initialTodoState: TodoReducer.IState;
  beforeEach(() => {
    initialTodoState = {
      isFetching: false,
      todos: [{
        id: 1,
        isDone: true,
        name: 'todo',
        description: 'Design is important!'
      },
      {
        id: 2,
        isDone: false,
        name: 'todo',
        description: 'Design is important!'
      },
      {
        id: 3,
        isDone: false,
        name: 'todo',
        description: 'Design is important!'
      }]
    };
  });

  it('should select all todos', () => {
    expect(TodoReducer.selectAllTodos(initialTodoState).length).toBe(initialTodoState.todos.length);
  });

  it('should select completed todos', () => {
    expect(TodoReducer.selectDoneTodoList(initialTodoState).length).toBe(1);
  });

  it('should select not completed todos', () => {
    expect(TodoReducer.selectUndoneTodoList(initialTodoState).length).toBe(2);
  });
});

describe('Todo Reducers', () => {

  let initialTodoState: TodoReducer.IState;
  beforeEach(() => {
    initialTodoState = {
      isFetching: false,
      todos: [{
        id: 1,
        isDone: true,
        name: 'todo',
        description: 'Design is important!'
      },
      {
        id: 2,
        isDone: false,
        name: 'todo',
        description: 'Design is important!'
      },
      {
        id: 3,
        isDone: false,
        name: 'todo',
        description: 'Design is important!'
      }]
    };
  });

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

  it('should update state with todos on action receive', () => {
    // Act
    const actualState = TodoReducer.reducer(initialTodoState, TodoActions.receive({
      todos: [{
        id: 1,
        name: 'todo',
        isDone: true,
        description: 'Design is important!'
      }]
    }));
    // Assert
    expect(actualState.todos.length).toBe(1);
  });

  it('should update todo state on action toggle', () => {
    // Act
    const actualState = TodoReducer.reducer(initialTodoState, TodoActions.toggle({ todoId: initialTodoState.todos[0].id }));
    // Assert
    expect(actualState.todos[0].isDone).toBeFalsy(initialTodoState.todos[0].isDone);
  });
});
