import { Injectable } from '@angular/core';
import {Book} from './book';
@Injectable()
export class BookService {
  getBooks() { 
    var books: Book[] = [
  { "id": 1, "title": "ASP.NET Web API Security Essentials", author: "Rajesh Gunasundaram", publisher: "Packt Publishing" },
  { "id": 2, "title": "Learning Angular for .Net Developers", author: "Rajesh Gunasundaram", publisher: "Packt Publishing" },
  { "id": 3, "title": "Mastering Angular", author: "Rajesh Gunasundaram", publisher: "Packt Publishing" },
    ];
    return books;
  }
}
