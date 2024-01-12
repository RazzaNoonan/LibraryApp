import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinAuthors'
})
export class JoinAuthorsPipe implements PipeTransform {
  transform(authors: string[]): string {
    return authors.join(', ');
  }
}
