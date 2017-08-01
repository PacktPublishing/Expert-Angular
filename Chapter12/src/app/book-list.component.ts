import { Component, OnInit }   from '@angular/core';
import { Book }        from './book';
import { BookService } from './book.service';
@Component({
  selector: 'book-list',
  template: `
  <div *ngFor="let book of books">
    <b>{{book.id}} - {{book.title}}</b><br/>
    Author: {{book.author}}<br/>
    Publication: {{book.publisher}}<br/><br/>
  </div>
  `,
   providers: [BookService]
})
export class BookListComponent implements OnInit {
  books: Array<Book>;

  constructor(private bookService: BookService) {  }

   ngOnInit() {
      this.books = this.bookService.getBooks();
    }
}
