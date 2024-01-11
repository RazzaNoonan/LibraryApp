import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',             // Defines the tag used to embed this component in other templates.
  templateUrl: './signup.page.html',  // Path to the HTML template for this component.
  styleUrls: ['./signup.page.scss'],  // Path to the styles for this component.
})
export class SignUpPage implements OnInit {
  regForm: FormGroup;  // FormGroup to manage signup form data.

  constructor(
    private formBuilder: FormBuilder, // FormBuilder to create form control groups.
    private loadingCtrl: LoadingController, // LoadingController to manage loading indicators.
    private authService: AuthService, // AuthService for handling authentication logic.
    private router: Router // Router for navigating between pages.
  ) {}

  ngOnInit() {
    // Initialize the registration form with validators for email and password.
    this.regForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Email field with required and email format validations.
      password: ['', [Validators.required, Validators.minLength(6)]] // Password field with required and minimum length validations.
    });
  }

  // Getter for easy access to form fields errors.
  get errorControl() {
    return this.regForm.controls;
  }

  async signUp() {  
    // Display a loading indicator during the signup process.
    const loading = await this.loadingCtrl.create();
    await loading.present();

    // Check if form is valid and perform signup.
    if (this.regForm.valid) {
      const { email, password } = this.regForm.value;

      try {
        // Attempt to register the user using AuthService.
        await this.authService.registerUser(email, password);
        console.log('User registered successfully!');
        await loading.dismiss(); // Dismiss loading indicator on success.
        this.router.navigate(['/home']); // Navigate to home page on successful registration.
      } catch (error) {
        // Handle any errors during registration.
        console.error('Registration error:', error);
        await loading.dismiss(); // Dismiss loading indicator on error.
      }
    } else {
      // Log form validation errors.
      console.error('Form not valid:', this.regForm.errors);
      await loading.dismiss(); // Dismiss loading indicator if form is invalid.
    }
  }
}