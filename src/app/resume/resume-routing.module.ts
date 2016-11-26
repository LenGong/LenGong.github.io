import { NgModule }  from '@angular/core';
import { RouterModule } from '@angular/router';

import { ResumeComponent } from './resume.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ResumeComponent },
    ])
    ],
    exports: [RouterModule]
})
export class ResumeRoutingModule {}
