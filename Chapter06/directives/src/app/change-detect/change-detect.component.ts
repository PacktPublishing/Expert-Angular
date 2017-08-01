import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-change-detect',
  template: `
    <div>
  
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./change-detect.component.css']
})
export class ChangeDetectComponent {

  title = "Change Detection";
  @Input() user: User;

  constructor() { }

  
}


