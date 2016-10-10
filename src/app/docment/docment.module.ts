import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { routing } from './docment.routing';
import { DocmentComponent } from './docment.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [DocmentComponent],
  providers: []
})
export class DocmentModule { }
