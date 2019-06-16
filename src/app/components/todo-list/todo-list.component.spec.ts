import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { By } from '@angular/platform-browser';
import { ITodo } from 'src/app/models/ITodo';
import { TodoListComponent } from './todo-list.component';

const MATERIAL_MODULES = [
  MatListModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatCheckboxModule
];



describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoList: ITodo[];
  beforeEach((async () => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [...MATERIAL_MODULES],
      providers: []
    }).compileComponents();

  }));

  beforeEach(() => {
    todoList = [{
      id: 1,
      name: 'My Todo',
      isDone: true
    },
    {
      id: 2,
      name: 'My Todo 2',
      isDone: true
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
    const buttonList = todoListElement.querySelectorAll('button');

    for (let index = 0; index < buttonList.length; index++) {
      expect(buttonList[index].textContent).toEqual(todoList[index].name);
    }
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
