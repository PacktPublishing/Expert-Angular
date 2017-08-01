import {Component } from '@angular/core';

@Component({
 template: `
 <h5>Chain Pipes</h5>
 <p>Month is {{today | date | uppercase | slice:0:4}}
 `,
})
export class ChainPipeComponent {
 today = new Date();
}