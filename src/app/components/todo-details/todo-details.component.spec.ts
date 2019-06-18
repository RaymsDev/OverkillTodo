import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared.module';
import { IState as TodoState, reducer as TodoReducer } from './../../reducers/todo.reducer';
import { TodoDetailsComponent } from './todo-details.component';

describe('TodoDetailsComponent', () => {
  let component: TodoDetailsComponent;
  let fixture: ComponentFixture<TodoDetailsComponent>;
  let store: Store<{ todo: TodoState }>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDetailsComponent],
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot({
          todo: TodoReducer,
        }),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
