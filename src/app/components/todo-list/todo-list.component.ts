import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/ITodo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() Todos: ITodo[];
  constructor() { }

  ngOnInit() {
  }
}
