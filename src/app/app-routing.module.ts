import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {MeetingsComponent} from './meetings/meetings.component';
import {ContactDetailComponent} from './contacts/contact-detail/contact-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent, children: [
      {path: '', component: ContactDetailComponent},
      {path: ':id', component: ContactDetailComponent}
    ]},
  {path: 'meetings', component: MeetingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
