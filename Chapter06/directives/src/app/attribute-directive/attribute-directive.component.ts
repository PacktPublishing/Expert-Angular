import { Component} from '@angular/core';

@Component({
 selector: 'my-app',
 styleUrls: ['./attribute-directive.component.css'],
 template:`
 <h4>Welcome to Built-In {{title}}</h4>
 
 <strong>using ngModel</strong>
 <div><label for="username">Enter username</label>
 <input type="text" [(ngModel)]="username" placeholder="enter username" 
    id="username">
 <p>username is: {{username}}</p>
 </div>
 
<strong>Notification example using ngStyle</strong>
 <p [ngStyle]="{ 'font-size': '13px', 'background-color':'#c5e1a5'}" 
>Sample success message</p>  

    <strong>Notification example using ngClass</strong>
    <p [ngClass]="'warning'" >Sample warning message</p>
    <p [ngClass]="'error'" >Sample error message</p>
   `
})
export class AttributeDirectiveComponent {
 title = 'Attribute Directive';
 public username="Packt Author";
}
