import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared';

@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', redirectTo: 'main', pathMatch:'full' },
        { path: 'resume', loadChildren: "es6-promise-loader!./resume/resume.module#ResumeModule" },
    ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
