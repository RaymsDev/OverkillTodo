import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { SharedModule } from 'src/app/shared.module';
import { TodoFormComponent } from './todo-form.component';
import * as TodoActions from './../../actions/todo.actions';
import { IState as TodoState, reducer as TodoReducer } from './../../reducers/todo.reducer';
import { ITodo } from 'src/app/models/ITodo';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let store: Store<{ todo: TodoState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [
        ReactiveFormsModule,
        SharedModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({
          todo: TodoReducer,
        }),
      ],
      providers: [],
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.TodoForm.valid).toBeFalsy();
  });

  it('should dispatch create todo action', () => {
    // arrange
    const name = component.TodoForm.controls.name;
    name.setValue('test');
    const newTodo: Partial<ITodo> = {
      name: name.value,
      description: '',
    };
    // act
    component.OnSubmit();
    // assert
    const action = TodoActions.create({ todo: newTodo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it("shouldn't submit when form is invalid", () => {
    // act
    component.OnSubmit();
    // assert
    expect(store.dispatch).toHaveBeenCalledTimes(0);
  });
});
