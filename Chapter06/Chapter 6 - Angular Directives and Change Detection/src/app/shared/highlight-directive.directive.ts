import { Directive, ElementRef, Input, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCodeHighlight]'
})
export class HighlightDirectiveDirective{

  @Input() highlightColor : string;
  @Input() showOpacity : string;
  @Input() hideOpacity : string;

  constructor(private elRef: ElementRef) { 
    this.elRef.nativeElement.style.color = 'orange';
  }

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = this.highlightColor;
  }

  @HostListener('mouseover') onmouseover() {
    this.elRef.nativeElement.style.opacity = this.hideOpacity;
  }

  @HostListener('mouseout') onmouseout() {
    this.elRef.nativeElement.style.opacity = this.showOpacity;
  }
}
