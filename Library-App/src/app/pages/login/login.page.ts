import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor() { }

  login(): void {
    // Implement login logic here
    console.log('Login with', this.email, this.password);
  }
}
