import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'joinAuthors' }) // Define a custom Angular pipe named 'joinAuthors'
export class JoinAuthorsPipe implements PipeTransform {
  transform(authors: any[]): string {
    // Transform function to concatenate author names with commas
    return authors.map(author => author.name).join(', '); // Map author names and join with commas
  }
}
