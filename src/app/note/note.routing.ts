import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteComponent } from './note.component';

const noteRoutes: Routes = [
  { path: 'note', component: NoteComponent },
  // { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const routing:ModuleWithProviders = RouterModule.forChild(noteRoutes);
