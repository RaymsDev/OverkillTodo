import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITodo } from '../models/ITodo';

export class InMemTodoService implements InMemoryDbService {
  createDb() {
    const todos: ITodo[] = [
      { id: 1, name: 'Design', isDone: true },
      { id: 2, name: 'Code', isDone: false },
      { id: 3, name: 'Test', isDone: false },
      { id: 4, name: 'Deploy', isDone: false },
    ];
    return { todos };
  }
}
