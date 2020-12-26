import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from './contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {

  }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

}
