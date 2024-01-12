import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AddImageService } from '../../services/add-image.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home', // Defines the custom HTML tag for this component
  templateUrl: 'home.page.html', // Specifies the HTML template for the component
  styleUrls: ['home.page.scss'], // Specifies the SCSS stylesheet for the component
})
export class HomePage implements OnInit, OnDestroy {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>; // Accesses the file input element in the template
  user: firebase.User | null = null; // Stores the current user object
  uploadedImageUrl: string | null = null; // Stores the URL of the uploaded profile image
  private userSubscription: Subscription; // Manages the subscription to the AuthService's currentUser observable

  constructor(
    private router: Router, // Provides navigation functionality
    private authService: AuthService, // Provides authentication-related functionality
    private addImageService: AddImageService // Provides functionality to upload images
  ) {}

  ngOnInit(): void {
    // Subscribes to the AuthService's currentUser observable to get and display user information
    this.userSubscription = this.authService.currentUser.subscribe(user => {
      this.user = user; // Updates the user object with the current user data
      this.uploadedImageUrl = user?.photoURL || null; // Sets the uploaded image URL to the user's photo URL or null
    });
  }

  ngOnDestroy(): void {
    // Unsubscribes from the AuthService's currentUser observable to avoid memory leaks
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  triggerFileInput() {
    // Triggers the click event on the hidden file input element
    this.fileInput.nativeElement.click();
  }

  async onFileSelected(event: Event) {
    // Handles the file selection event for uploading a new profile image
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return; // Exits if no file is selected
  
    const file = input.files[0]; // Retrieves the selected file
    if (this.user) {
      try {
        // Attempts to upload the selected file using AddImageService and update the profile image URL
        const imageUrl = await this.addImageService.addProfileImage(file, this.user.uid);
        this.uploadedImageUrl = imageUrl; // Updates the component state with the new image URL
      } catch (error) {
        // Logs an error if the upload fails
        console.error('Error uploading file:', error);
      }
    } else {
      // Logs an error if no user is logged in
      console.error('No user logged in');
    }
  }

  logout() {
    // Handles the logout process
    this.router.navigate(['/landing']); // Navigates to the login page after logging out
  }
}
