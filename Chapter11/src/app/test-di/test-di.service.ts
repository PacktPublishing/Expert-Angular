import { Injectable } from '@angular/core';
import { CityService } from './city.service';

@Injectable()
export class TestDiService {
	
	constructor(private _city: CityService) {  }
  	getAuthors() {
  		
  		/*let Authors =[
	   		{name :"Sridhar"},
	   		{name: "Robin"},
	   		{name: "John"},
	   		{name: "Aditi"}
		]; */

	let Authors = this._city.getCities();

	return Authors;
  }
}
