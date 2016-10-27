import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';

@NgModule({
  imports: [CommonModule, GameRoutingModule],
  declarations: [GameComponent],
})
export class GameModule { }
