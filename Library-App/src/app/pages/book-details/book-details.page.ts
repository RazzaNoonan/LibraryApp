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
        this.book = data; // Process the data to extract the book information
        console.log(this.book); // Add this line to check the received data
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching book data:', error);
        this.loading = false;
      }
    );
  }
}  
