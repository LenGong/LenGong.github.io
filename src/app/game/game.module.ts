import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { routing } from './game.routing';
import { GameComponent } from './game.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [GameComponent],
})
export class GameModule { }
