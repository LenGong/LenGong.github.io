import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PictureComponent } from './picture.component';

const pictureRoutes: Routes = [
  { path: 'picture', component:PictureComponent },
  // { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const routing:ModuleWithProviders = RouterModule.forChild(pictureRoutes);
