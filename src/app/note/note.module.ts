import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { routing } from './note.routing';
import { NoteComponent } from './note.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [NoteComponent],
})
export class NoteModule { }
