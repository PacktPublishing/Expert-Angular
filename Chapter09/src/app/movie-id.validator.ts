import { FormControl } from '@angular/forms';

interface ValidationResult {
 [key:string]:boolean;
}

export class MovieIDValidator{
	static idNotTaken(control: FormControl): ValidationResult { 

		let movies = require('./../assets/marvel-cinematic-universe.json').movies;
		let found:boolean = false;
		
		for (var i = 0; i < movies.length; ++i) {

			if(control.value == movies[i].movie_id){
				 return { "idNotTaken": true };
			}
		}
	 
	   return null;
	}

	static idTakenAsync(control: FormControl): Promise<ValidationResult> { 

		let p = new Promise((resolve, reject) => {
	     setTimeout(() => {

	     	let movies = require('./../assets/marvel-cinematic-universe.json').movies;
			let found:boolean = false;
			
			for (var i = 0; i < movies.length; ++i) {

				if(control.value == movies[i].movie_id){
					 resolve({ "idNotTaken": true });
				}
			}

	        resolve(null);
	       
	     }, 1000)
	   });
	 
	   return p;

	}
}