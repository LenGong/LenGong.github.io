import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {path: 'note', loadChildren:"es6-promise?[name]!./note/note.module#NoteModule"}
];


export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
