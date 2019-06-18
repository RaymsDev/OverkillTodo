import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodoPageComponent
  },
  {
    path: 'todos/:id/details',
    component: TodoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
