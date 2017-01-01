import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { ShipRootComponent, ShipRockComponent } from './rock2';
import { GlengineModule } from '../glengine';



@NgModule({
  imports: [CommonModule, GameRoutingModule, GlengineModule],
  declarations: [GameComponent, ShipRootComponent, ShipRockComponent],
})
export class GameModule { }
