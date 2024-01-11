import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() { }

  signup(): void {
    // Implement signup logic here
    console.log('Signup with', this.fullName, this.email, this.password);
    // Ensure password and confirmPassword match
  }
}
