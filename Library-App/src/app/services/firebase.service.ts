import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'; 
// For Realtime Database
import 'firebase/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db = firebase.database();

  constructor() { }

  rentBook(bookIsbn: string, userId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const bookRef = this.db.ref('Books').child(bookIsbn);
      const userRef = this.db.ref('Users').child(userId);
      const newRentalRef = this.db.ref('Rentals').push();
  
      bookRef.once('value', (snapshot) => {
        const book = snapshot.val();
        if (book && book.available) {
          const rentalData = {
            book: bookIsbn,
            user: userId,
            rental_date: Date.now(),
            due_date: Date.now() + 7 * 24 * 3600 * 1000, // 1 week from now
            returned_date: null
          };
  
          newRentalRef.set(rentalData)
            .then(() => {
              bookRef.update({ available: false })
                .then(resolve)
                .catch((error) => {
                  console.error('Failed to update book availability:', error);
                  reject(error);
                });
            })
            .catch((error) => {
              console.error('Failed to create rental record:', error);
              reject(error);
            });
        } else {
          console.log('Book is not available or already rented.');
          reject(new Error("Book is not available for rental."));
        }
      }, (error) => {
        console.error('Failed to get book information:', error);
        reject(error);
      });
    });
  }
}