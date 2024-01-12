import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage {
  isbn: string = '';
  book: any = null;
  loading: boolean = false;

  constructor(private bookService: BookService) {}

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
}
