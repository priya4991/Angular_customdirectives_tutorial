import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,   //reference to the element our directive is applied to
    private templateRef: TemplateRef<any>      //reference to whatever elements are placed inside our viewContainer
  ) { }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i=0; i<times; i++) {
      //createEmbeddedView creates a new HTML
      this.viewContainer.createEmbeddedView(this.templateRef, {
        //Context object, can add in different properties in here to make them accessible in our template through our directive
        index: i,
        color: 'red'
      });  
    }
  }

}
