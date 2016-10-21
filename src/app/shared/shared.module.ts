import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlRepeatDirective } from './gl_repeat.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [GlRepeatDirective],
  exports: [GlRepeatDirective]
})
export class SharedModule { }
