import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../contacts-list/contact.model';
import {ContactService} from '../contact.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;
  id: number;

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = + params['id'];
    });
    this.contact = this.contactService.getContacts()[this.id];
  }

}