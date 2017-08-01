import { Injectable } from '@angular/core';

@Injectable()
export class TestAppService {

  getAuthorCount() {
  	let Authors =[
	   {name :"Sridhar"},
	   {name: "Robin"},
	   {name: "John"},
	   {name: "Aditi"}
	];

	return Object.keys(Authors).length;
  };
}
