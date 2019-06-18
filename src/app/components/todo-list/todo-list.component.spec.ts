import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ITodo } from 'src/app/models/ITodo';
import { SharedModule } from 'src/app/shared.module';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoList: ITodo[];
  beforeEach((async () => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [SharedModule, RouterTestingModule.withRoutes([])],
      providers: []
    }).compileComponents();

  }));

  beforeEach(() => {
    todoList = [{
      id: 1,
      name: 'My Todo',
      isDone: true,
      description: 'Design is important!'
    },
    {
      id: 2,
      name: 'My Todo 2',
      isDone: true,
      description: 'Design is important!'
    }];

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    component.DoneTodoList = todoList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todo name', () => {
    const todoListElement: HTMLElement = fixture.debugElement.nativeElement;
    const buttonList = todoListElement.querySelectorAll('.todo-content span');


    expect(buttonList[0].textContent.trim()).toEqual(todoList[0].name.trim());

  });


  it('should trigger event when todo is clicked', () => {
    let actualTodoId: number;
    const todoItemElement = fixture.debugElement.query(By.css('mat-list-option'));

    component.todoToggle.subscribe(todoId => {
      actualTodoId = todoId;
    });

    todoItemElement.triggerEventHandler('click', todoList[0].id);
    expect(actualTodoId).toBe(todoList[0].id);
  });

});
