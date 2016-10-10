import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
