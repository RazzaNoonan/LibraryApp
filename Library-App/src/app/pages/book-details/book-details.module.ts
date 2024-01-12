import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookDetailsPageRoutingModule } from './book-details-routing.module';
import { BookDetailsPage } from './book-details.page';
import { JoinAuthorsPipe } from '../../pipes/join-authors.pipe'; // Import the JoinAuthorsPipe

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookDetailsPageRoutingModule,
  ],
  declarations: [BookDetailsPage, JoinAuthorsPipe], 
})
export class BookDetailsPageModule {}
