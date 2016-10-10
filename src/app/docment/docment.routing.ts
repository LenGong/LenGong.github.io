import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocmentComponent } from './docment.component';

const docmentRoutes: Routes = [
  { path: 'docment', component: DocmentComponent },
  // { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const routing:ModuleWithProviders = RouterModule.forChild(docmentRoutes);
