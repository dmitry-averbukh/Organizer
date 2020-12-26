import { EventEmitter } from '@angular/core';
import {Contact} from './contacts-list/contact.model';

export class ContactService {
  private contacts: Contact[];

  contactSelected = new EventEmitter<Contact>();

  constructor(){
    this.contacts = [
      new Contact('David',
        'CEO @ NoOneWare',
        'https://randomuser.me/api/portraits/men/75.jpg'),
      new Contact('George',
        'CTO @ NoOneWare',
        'https://randomuser.me/api/portraits/men/76.jpg'),
      new Contact('Andre',
        'CEO @ NoOneWare',
        'https://randomuser.me/api/portraits/men/77.jpg'),
      new Contact('John',
        'CTO @ NoOneWare',
        'https://randomuser.me/api/portraits/men/78.jpg')
    ];
  }

  getContacts(){
    return this.contacts.slice();
  }
}
