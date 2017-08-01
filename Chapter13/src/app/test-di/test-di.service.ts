import { Injectable } from '@angular/core';
import { CityService } from './city.service';

@Injectable()
export class TestDiService {
	
	constructor(private _city: CityService) {  }
  	getAuthors() {
  		
  		let Authors =[
	   		{name :"Sridhar"},
	   		{name: "Robin"},
	   		{name: "John"},
	   		{name: "Aditi"}
		];
		return Authors;
  }
  getCityList() {
  	let cities = this._city.getCities();
  	return cities;
 }
}
