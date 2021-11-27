import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FRONTComponent } from './FRONT/front.component';
import { TodoComponent } from './FRONT/todo/todo.component';
import { DoingComponent } from './FRONT/doing/doing.component';
import { DoneComponent } from './FRONT/done/done.component';
import { ItemComponent } from './FRONT/item/item.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { APIService } from './api.service';
import { NewItemComponent } from './FRONT/new-item/new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FRONTComponent,
    TodoComponent,
    DoingComponent,
    DoneComponent,
    ItemComponent,
    LoginComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
