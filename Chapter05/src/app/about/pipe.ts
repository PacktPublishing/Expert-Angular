import { Component } from '@angular/core';

@Component({
    template:  `
        <h4>1. Today is {{today}}</h4>
	    <h4>2. Today is {{today | date}}</h4>
		`,
    styles: ['.very-pale-red {background-color: #fff;}']
})
export class AboutComponent {
	
	today = new Date();

}