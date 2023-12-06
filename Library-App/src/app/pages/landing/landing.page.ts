import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  // Hold messages for feature card read - They are initialized to empty strings.
  readMessage: string = '';

  constructor() { }
  // Method to show the read message - Clears after 2 seconds.
  showReadMessage(): void {
    this.readMessage = 'Dive into your next favorite book!\n' + 'You can rent books. Up to a wide range';
    setTimeout(() => this.readMessage = '', 2000);
  }
}