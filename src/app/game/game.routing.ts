import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game.component';

const gameRoutes: Routes = [
  { path: 'game', component: GameComponent },
  // { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const routing:ModuleWithProviders = RouterModule.forChild(gameRoutes);
