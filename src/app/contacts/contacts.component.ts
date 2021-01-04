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
  errorMassage: string;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.fetctchAllContacts();
    this.contactService.contactSelected.subscribe((contact: Contact) => {this.selectedContact = contact;
    });
    this.contactService.errorChanel.subscribe(errorMassage => {
      this.errorMassage = errorMassage;
    });
  }

  onClickDismissError() {
    this.errorMassage = '';
  }
}
