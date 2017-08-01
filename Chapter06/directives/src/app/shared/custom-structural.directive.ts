import { Directive, Input, TemplateRef, ViewContainerRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCustomStructural]'
})
export class CustomStructuralDirective {

  @Input()

  set appCustomStructural(product){
    if(product.isAvailable == true)
    {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef : TemplateRef<any>,
    private viewContainerRef : ViewContainerRef
    ) { }

}
