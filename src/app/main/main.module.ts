import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { routing } from './main.routing';
import { MainComponent } from './main.component';
import { JumbComponent} from './jumb';


@NgModule({
  imports: [CommonModule, routing],
  declarations: [MainComponent, JumbComponent],
  providers: []
})
export class MainModule { }
