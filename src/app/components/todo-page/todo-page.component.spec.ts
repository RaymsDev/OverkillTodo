import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared.module';
import { TodoListComponent } from '../todo-list/todo-list.component';
import * as TodoActions from './../../actions/todo.actions';
import { IState as TodoState, reducer as TodoReducer } from './../../reducers/todo.reducer';
import { TodoPageComponent } from './todo-page.component';

describe('TodoPageComponent', () => {
  let component: TodoPageComponent;
  let fixture: ComponentFixture<TodoPageComponent>;
  let store: Store<{ todo: TodoState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoPageComponent, TodoListComponent],
      imports: [
        SharedModule,
        StoreModule.forRoot({
          todo: TodoReducer,
        }),
        RouterTestingModule.withRoutes([]),
      ],
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(TodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to list todo when created', () => {
    component.ngOnInit();
    const action = TodoActions.fetch();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch update todo action', () => {
    // arrange
    const todo = { id: 1, name: 'Design', isDone: true, description: 'Design is important!', createdAt: new Date() };
    // act
    component.OnTodoToggle(todo);
    // assert
    const action = TodoActions.update({ id: 1, todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
