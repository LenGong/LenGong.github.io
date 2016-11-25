import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { ShipComponent } from './rock'
import { ShipRootComponent } from './rock2';

@NgModule({
  imports: [RouterModule.forChild([
      { path: 'game', component: GameComponent },
      { path: 'ship', component: ShipComponent },
      { path: 'ship_rock', component: ShipRootComponent },
  ])],
  exports: [RouterModule]
})
export class GameRoutingModule { }
