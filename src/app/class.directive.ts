import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  //this means that element referes to the HTML element this directive is applied to
  constructor(private element: ElementRef) {  }


  //keyword 'set' is used to trigger an event when a property is changed in TS
  //this is exactly like @Input() classNames = '' syntax, except that we are triggering an event here
  //this is done because angular first instantiates the class ClassDirective when it finds 'appClass' in the template
  //and by the time it reaches the '[classNames]=" classObj "' part, the component is already rendered and
  //the property change isnt detected.

  //setting an Alias to @Input so that we can directly use 'appClass' in the template while preserving the actual property name
  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }  
  }

}
