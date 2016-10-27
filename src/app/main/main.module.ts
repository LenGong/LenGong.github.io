import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { JumbComponent} from './jumb';


@NgModule({
  imports: [CommonModule,  MainRoutingModule],
  declarations: [MainComponent, JumbComponent],
  providers: []
})
export class MainModule { }
