import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router'; // Import Router module
import { ScannerService } from '../../services/scanner.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage {
  // Class properties
  isbn: string = '';      // Stores the ISBN entered by the user
  book: any = null;       // Stores the book data retrieved from the service
  loading: boolean = false; // Indicates whether data is being loaded

  constructor(
    private bookService: BookService, // Inject BookService
    private authService: AuthService, // Inject AuthService
    private router: Router, // Inject Router
    private scannerService: ScannerService // ScannerService
  ) {}

  async scanISBN() {
    const isbn = await this.scannerService.startScan();
    if (isbn) {
      this.isbn = isbn;
      this.searchBook(); // You can then use this ISBN to search for books
    }
  }


  // Method to search for a book by ISBN
  searchBook() {
    this.loading = true; // Display loading spinner
    this.bookService.getBookByISBN(this.isbn).subscribe(
      (data) => {
        const bookKey = 'ISBN:' + this.isbn;
        this.book = data[bookKey]; // Store the book data
        console.log(this.book); // Log the book details
        this.loading = false; // Hide loading spinner
      },
      (error) => {
        console.error('Error fetching book data:', error); // Log error
        this.loading = false; // Hide loading spinner
      }
    );
  }
  
  // Method to log out the user
  logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/landing']); // Navigate to the landing page after logout
    }).catch(error => {
      console.error('Logout error:', error); // Log logout error
      alert(`Logout error: ${error.message}`); // Display error message to the user
    });
  }
}
