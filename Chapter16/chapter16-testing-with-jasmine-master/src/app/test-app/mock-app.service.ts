import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class MockAppService {
 constructor (private http: Http) {}
  
 getpublications() {
    return ['Packt', 'Packt PDF', 'Packt Video'];
  }

  getproducts() {
    return this.http.get('someurl1').map((response) => response);
  }

 search(term: string): Observable<any> {
   return this.http.get(
      'someurl'
    ).map((response) => response.json());
  }
}