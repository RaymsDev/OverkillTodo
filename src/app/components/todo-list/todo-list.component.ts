import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }
  ngOnInit() {
  }
  public OnClickToggleTodo(todoId: number) {
    this.todoToggle.emit(todoId);
  }

  public OnClickNavigate(event: Event, todoId: number) {
    event.stopPropagation();
    this.router.navigate(['todos', todoId, 'details']);
  }
}
