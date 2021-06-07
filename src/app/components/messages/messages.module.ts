import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { SentComponent } from './sent/sent.component';
import { NewComponent } from './new/new.component';
import { ReceivedComponent } from './received/received.component';
import { InboxComponent } from './inbox/inbox.component';
RouterModule;

@NgModule({
  declarations: [
    MessagesComponent,
    SentComponent,
    NewComponent,
    ReceivedComponent,
    InboxComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class InboxModule {}