import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';
import { TodoEffects } from './todo.effects';

describe('Todo Effects', () => {
  let actions$: ReplaySubject<any>;
  let effects: TodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TodoEffects,
        provideMockActions(() => actions$),
      ]
    });

    effects = TestBed.get(TodoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });


});
