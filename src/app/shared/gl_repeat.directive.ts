import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[glRepeat]' })
export class GlRepeatDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }
    
    @Input() set glRepeat(num: number) {
        while (num--) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}
