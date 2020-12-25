import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Organizer';
  activeSection = 'contacts';

  onNavigate(section: string) {
    this.activeSection = section;
  }
}
