import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ITodo } from 'src/app/models/ITodo';
import { TodoListComponent } from './todo-list.component';

const MATERIAL_MODULES = [
  MatListModule,
  MatCardModule,
  MatProgressSpinnerModule
];

const todoList: ITodo[] = [{
  id: 1,
  name: 'My Todo',
  isDone: true
},
{
  id: 2,
  name: 'My Todo 2',
  isDone: true
}];

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach((async () => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [...MATERIAL_MODULES],
      providers: []
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todo name', () => {

    component.Todos = todoList;

    fixture.detectChanges();
    const todoListElement: HTMLElement = fixture.debugElement.nativeElement;
    const buttonList = todoListElement.querySelectorAll('button');

    for (let index = 0; index < buttonList.length; index++) {
      expect(buttonList[index].textContent).toEqual(todoList[index].name);
    }
  });



});
