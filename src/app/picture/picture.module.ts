import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { routing } from './picture.routing';
import { PictureComponent } from './picture.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [PictureComponent],
})
export class PictureModule { }
