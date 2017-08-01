import { Injectable } from '@angular/core';

@Injectable()
export class CityService {

  getCities() {
  	let cities =[
	   {name :"New York"},
	   {name: "Dallas"},
	   {name: "New Jersey"},
	   {name: "Austin"}
	];

	return cities;
  }
}
