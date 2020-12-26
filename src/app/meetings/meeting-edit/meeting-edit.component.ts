import { ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MeetingModel } from '../meeting.model';

class Meeting {
}

@Component({
  selector: 'app-meeting-edit',
  templateUrl: './meeting-edit.component.html',
  styleUrls: ['./meeting-edit.component.css']
})
export class MeetingEditComponent implements OnInit {

  @ViewChild("dateInput") dateInputRef: ElementRef;
  @ViewChild("contactNameInput") contactNameInputRef: ElementRef;

  @Output("createMeeting") meetingEmitter = new EventEmitter<Meeting>();

  constructor() { }

  ngOnInit(): void {
  }

  onNewMeetingSubmitted() {
    const date = this.dateInputRef.nativeElement.value;
    const contactName = this.contactNameInputRef.nativeElement.value;

    this.meetingEmitter.emit(new MeetingModel(contactName, date));

    this.onClearMeetingView();
  }

  onClearMeetingView() {
    this.dateInputRef.nativeElement.value = '';
    this.contactNameInputRef.nativeElement.value = '';
  }
}
