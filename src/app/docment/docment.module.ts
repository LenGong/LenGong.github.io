import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocmentRoutingModule } from './docment-routing.module';

import { DocmentComponent } from './docment.component';

@NgModule({
  imports: [CommonModule, DocmentRoutingModule],
  declarations: [DocmentComponent],
  providers: []
})
export class DocmentModule { }
