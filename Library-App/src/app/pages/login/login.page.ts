import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',             // Defines the tag used to embed this component in other templates.
  templateUrl: './login.page.html',  // Path to the HTML template for this component.
  styleUrls: ['./login.page.scss'],  // Path to the styles for this component.
})
export class LoginPage implements OnInit {  
  loginForm: FormGroup;  // FormGroup to handle login form data.

  constructor(
    private formBuilder: FormBuilder, // FormBuilder to create form control groups.
    private loadingCtrl: LoadingController, // LoadingController to manage loading indicators.
    private authService: AuthService, // AuthService for handling authentication logic.
    private router: Router // Router for navigating between pages.
  ) {}

  ngOnInit() {
    // Initialize the login form with validators.
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter for easy access to form fields.
  get errorControl() {
    return this.loginForm.controls;
  }

  async login() {  
    // Display a loading indicator.
    const loading = await this.loadingCtrl.create();
    await loading.present();

    // Check if form is valid and attempt login.
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      try {
        // Use AuthService to perform login.
        await this.authService.loginUser(email, password);
        console.log('Login successful!');
        await loading.dismiss();
        this.router.navigate(['/home']); // Navigate to the home page after successful login.
      } catch (error) {
        // Handle login errors.
        console.error('Login error:', error);
        await loading.dismiss();
      }
    } else {
      // Handle form validation errors.
      console.error('Form not valid:', this.loginForm.errors);
      await loading.dismiss();
    }
  }
}