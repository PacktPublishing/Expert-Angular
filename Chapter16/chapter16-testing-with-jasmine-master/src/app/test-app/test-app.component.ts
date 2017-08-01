import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.css']
})

export class TestAppComponent {
	constructor() {}
	
	public myModel = "Testing E2e";
	public authorName = 'Sridhar';
	
	public publisherName = 'Packt';
	public afterClick = 'Element is not clicked';

	public hiPackt() {
    	return 'Hello ' + this.publisherName;
  	}

	public sendMail() {
		this.afterClick = 'Element is clicked';
	}

}
