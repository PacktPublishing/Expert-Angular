import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

	title = 'Implementing Data Binding';

  state = 'texas';
  colorVal = 'red';
  specialClass : true;
  tax = 10;
  updateTax() {
    this.tax = 30;
  }


}
