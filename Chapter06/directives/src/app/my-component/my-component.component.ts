import {Component} from "@angular/core";

@Component({
 selector: 'my-app',
 template: `<h2>{{ title }}</h2>`
})

export class MyComponentComponent {
 title = 'Hi. I am Component Directive'
}
