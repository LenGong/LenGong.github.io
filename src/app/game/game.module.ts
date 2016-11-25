import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { ShipComponent } from './rock';
import { ShipRootComponent, ShipRockComponent } from './rock2';

@NgModule({
  imports: [CommonModule, GameRoutingModule],
  declarations: [GameComponent, ShipComponent, ShipRootComponent, ShipRockComponent],
})
export class GameModule { }
