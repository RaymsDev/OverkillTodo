import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/models/ITodo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() UndoneTodoList: ITodo[];
  @Input() DoneTodoList: ITodo[];
  @Output() todoToggle = new EventEmitter<number>();
  constructor() { }
  ngOnInit() {
  }
  public OnClickToggleTodo(todoId) {
    this.todoToggle.emit(todoId);
  }
}
