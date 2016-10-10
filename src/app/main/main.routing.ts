import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  { path: 'main', component: MainComponent },
  // { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(mainRoutes);
