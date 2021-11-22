import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FRONTComponent } from './FRONT/front.component';
import { TodoComponent } from './FRONT/todo/todo.component';
import { DoingComponent } from './FRONT/doing/doing.component';
import { DoneComponent } from './FRONT/done/done.component';
import { ItemComponent } from './FRONT/item/item.component';
import { LoginComponent } from './login/login.component';
import { CardService } from './card.service';

@NgModule({
  declarations: [
    AppComponent,
    FRONTComponent,
    TodoComponent,
    DoingComponent,
    DoneComponent,
    ItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
