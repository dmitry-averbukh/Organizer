import {EventEmitter, Injectable} from '@angular/core';
import {Contact} from './contacts-list/contact.model';
import {StorageService} from '../common/storage.service';
import {Subject} from 'rxjs';

@Injectable()
export class ContactService {
  private contacts: Contact[];

  contactSelected = new EventEmitter<Contact>();
  contactsChanged = new EventEmitter<Contact[]>();
  errorChanel = new Subject<string>();

  constructor(private storageService: StorageService) {
  }

  fetctchAllContacts() {
    this.storageService.getAllContacts().subscribe(contacts => {
      this.contacts = contacts;
      this.onContactChanged();
    }, error => {
      this.errorChanel.next('There was a error to fetch contacts from the cloud!');
    });
  }

  getContacts() {
    return this.contacts.slice();
  }

  getContactById(id: number) {
    return new Contact(this.contacts[id].name, this.contacts[id].description, this.contacts[id].imagePath);
  }

  onContactChanged() {
    this.contactsChanged.emit(this.getContacts());
  }

  replaceContact(id: number, contact: Contact) {
    this.contacts[id] = contact;
    this.onContactChanged();
  }

  appendContact(contact: Contact) {
    this.storageService.postContact(contact).subscribe(contact => {
        this.contacts.unshift(contact);
        this.onContactChanged();
      }, error => {
        this.errorChanel.next('Something went wrong while trying to add new contact!');
      });
  }
}
