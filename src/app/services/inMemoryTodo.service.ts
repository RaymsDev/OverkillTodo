import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITodo } from '../models/ITodo';

export class InMemTodoService implements InMemoryDbService {
  createDb() {
    const todos: ITodo[] = [
      { id: 1, name: 'Design', isDone: true, description: 'Design is important!', createdAt: new Date() },
      { id: 2, name: 'Code', isDone: false, description: 'Code is important!', createdAt: new Date() },
      { id: 3, name: 'Test', isDone: false, description: 'Test is important!', createdAt: new Date() },
      { id: 4, name: 'Deploy', isDone: false, description: 'Deploy is important too!', createdAt: new Date() },
    ];
    return { todos };
  }
}
