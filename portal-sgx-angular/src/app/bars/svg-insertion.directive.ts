import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSvgInsertion]'
})
export class SvgInsertionDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
