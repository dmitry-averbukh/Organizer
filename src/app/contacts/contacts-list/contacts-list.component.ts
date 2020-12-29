import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from './contact.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  onNewContact() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
