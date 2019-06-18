
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ITodo } from '../models/ITodo';
import { TodoService } from './todo.service';




describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;
  let request: TestRequest;

  const todoList: ITodo[] = [
    { id: 1, name: 'Design', isDone: true, description: 'Design is important!' },
    { id: 2, name: 'Code', isDone: false, description: 'Design is important!' },
    { id: 3, name: 'Test', isDone: false, description: 'Design is important!' },
    { id: 4, name: 'Deploy', isDone: false, description: 'Design is important!' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(TodoService);
    httpMock = TestBed.get(HttpTestingController);

  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch todo list', (done) => {
    // act
    service.List()
      .subscribe(res => {
        // assert
        expect(res).toEqual(
          todoList
        );
        done();
      });

    request = httpMock.expectOne('/api/todos');
    request.flush(todoList);

    httpMock.verify();
  });


});

