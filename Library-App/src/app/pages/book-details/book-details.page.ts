import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router'; // Import the Router module
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage {
  isbn: string = '';
  book: any = null;
  loading: boolean = false;

  constructor(
    private bookService: BookService,
    private authService: AuthService, // Inject AuthService
    private router: Router // Inject Router
  ) {}

  searchBook() {
    this.loading = true;
    this.bookService.getBookByISBN(this.isbn).subscribe(
      (data) => {
        // Assuming the data is nested as { 'ISBN:978-0321573513': { ...bookDetails } }
        const bookKey = 'ISBN:' + this.isbn; // Construct the key to access the book details
        this.book = data[bookKey]; // Now we are accessing the nested object
        console.log(this.book); // Should log the book details now
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching book data:', error);
        this.loading = false;
      }
    );
  }
  
  logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/landing']); // Navigates to the landing page after logging out
    }).catch(error => {
      console.error('Logout error:', error);
      alert(`Logout error: ${error.message}`); // Provide the user with an error message
    });
  }

}
