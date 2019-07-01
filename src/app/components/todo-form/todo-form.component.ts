import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ITodo } from 'src/app/models/ITodo';
import * as TodoActions from './../../actions/todo.actions';
import { IState as TodoState } from './../../reducers/todo.reducer';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  public TodoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<{ todo: TodoState }>, private router: Router) {}

  ngOnInit() {
    this.initTodoForm();
  }

  private initTodoForm(): void {
    this.TodoForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  public OnSubmit(): void {
    if (this.TodoForm.valid) {
      const todo: Partial<ITodo> = {
        name: this.TodoForm.value.name,
        description: this.TodoForm.value.description,
      };
      this.store.dispatch(TodoActions.create({ todo }));
      this.TodoForm.reset({
        name: '',
        description: '',
      });
    }
  }
}
