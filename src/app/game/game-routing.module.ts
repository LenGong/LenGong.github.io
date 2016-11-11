import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { ShipComponent } from './rock/ship.component'


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: GameComponent },
        { path: 'ship', component: ShipComponent }
    ])
    ],
    exports: [RouterModule]
})
export class GameRoutingModule { }
