import { Directive, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPersonRegisterFormInsertion]'
})
export class PersonRegisterFormInsertionDirective {

  @ViewChild('container1', {static: true, read: ViewContainerRef}) 
  public container1!: ViewContainerRef;

  constructor(public viewContainerRef: ViewContainerRef) { }
}
