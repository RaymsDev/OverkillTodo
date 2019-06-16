import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store, StoreModule } from '@ngrx/store';
import { TodoListComponent } from '../todo-list/todo-list.component';
import * as TodoActions from './../../actions/todo.actions';
import { IState as TodoState, reducer as TodoReducer } from './../../reducers/todo.reducer';
import { TodoPageComponent } from './todo-page.component';
const MATERIAL_MODULES = [
  MatListModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatCheckboxModule
];

describe('TodoPageComponent', () => {
  let component: TodoPageComponent;
  let fixture: ComponentFixture<TodoPageComponent>;
  let store: Store<{ todo: TodoState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoPageComponent, TodoListComponent],
      imports: [
        ...MATERIAL_MODULES,
        StoreModule.forRoot({
          todo: TodoReducer,
        }),
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
});
