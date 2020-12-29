import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  @ViewChild('f') contactForm: NgForm;

  id: number;
  editMode: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;

      console.log('Edit mode value is:');
      console.log(this.editMode);

    });
  }

  onSubmit() {
    console.log(this.contactForm);
  }
}

