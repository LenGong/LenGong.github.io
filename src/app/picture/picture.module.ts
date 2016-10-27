import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { PictureRoutingModule } from './picture-routing.module';
import { PictureComponent } from './picture.component';

@NgModule({
  imports: [CommonModule, PictureRoutingModule],
  declarations: [PictureComponent],
})
export class PictureModule { }
