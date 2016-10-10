import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeComponent } from './resume.component';

const resumeRoutes: Routes = [
  { path: 'resume', component: ResumeComponent },
];

export const routing:ModuleWithProviders = RouterModule.forChild(resumeRoutes);
