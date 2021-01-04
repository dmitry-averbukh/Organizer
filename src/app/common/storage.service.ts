import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Contact} from '../contacts/contacts-list/contact.model';
@Injectable()
export class StorageService{
  constructor(private http: HttpClient) {
  }
  getAllContacts(){
    return this.http.get<Contact[]>('http://localhost:8080/api/contacts/all');
  }
  postContact(contact: Contact){
    return this.http.post('http://localhost:8080/api/contacts/new', contact);
  }
}
