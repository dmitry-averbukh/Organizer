import { Component, OnInit } from '@angular/core';
import {MeetingModel} from './meeting.model';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  meetings: MeetingModel[];

  constructor() {
    this.meetings = [
      new MeetingModel('John', '25/10/2021'),
      new MeetingModel('David', '21/12/2024'),
      new MeetingModel('Alex', '27/11/2033'),
    ];
  }

  ngOnInit(): void {
  }

  onCreateMeeting(meeting: MeetingModel) {
    this.meetings.push(meeting);
  }
}
