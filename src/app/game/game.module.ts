import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { ShipComponent } from './rock/ship.component';

@NgModule({
  imports: [CommonModule, GameRoutingModule],
  declarations: [GameComponent, ShipComponent],
})
export class GameModule { }
