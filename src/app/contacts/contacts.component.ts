import { Component, OnInit } from '@angular/core';
import {ContactService} from './contact.service';
import {Contact} from './contacts-list/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  selectedContact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.contactSelected.subscribe((contact: Contact) => {this.selectedContact = contact} );
  }

}
