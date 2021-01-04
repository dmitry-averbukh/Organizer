import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactItemComponent } from './contacts/contacts-list/contact-item/contact-item.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingEditComponent } from './meetings/meeting-edit/meeting-edit.component';
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StorageService} from './common/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactItemComponent,
    ContactDetailComponent,
    MeetingsComponent,
    MeetingEditComponent,
    ContactStartComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
