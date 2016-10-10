import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { routing } from './resume.routing';
import { ResumeComponent } from './resume.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [ResumeComponent],
})
export class ResumeModule { }
