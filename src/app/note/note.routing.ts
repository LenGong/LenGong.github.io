import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteComponent } from './note.component';

const noteRoutes: Routes = [
  { path: '', component: NoteComponent },
];

export const routing:ModuleWithProviders = RouterModule.forChild(noteRoutes);
