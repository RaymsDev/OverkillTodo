import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { TodoEffects } from './effects/todo.effects';
import * as TodoReducer from './reducers/todo.reducer';
import { InMemTodoService } from './services/inMemoryTodo.service';
import { SharedModule } from './shared.module';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoPageComponent,
    TodoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterTestingModule.withRoutes([]),
    HttpClientInMemoryWebApiModule.forRoot(InMemTodoService, { delay: 1000 }),
    StoreModule.forRoot({ todo: TodoReducer.reducer }),
    BrowserAnimationsModule,
    SharedModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
