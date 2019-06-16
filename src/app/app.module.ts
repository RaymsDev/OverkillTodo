import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { TodoEffects } from './effects/todo.effects';
import * as TodoReducer from './reducers/todo.reducer';
import { InMemTodoService } from './services/inMemoryTodo.service';
const MATERIAL_MODULES = [
  MatListModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemTodoService, { delay: 1000 }),
    StoreModule.forRoot({ todo: TodoReducer.reducer }),
    BrowserAnimationsModule,
    ...MATERIAL_MODULES,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
