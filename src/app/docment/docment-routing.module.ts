import { NgModule }  from '@angular/core';
import { RouterModule } from '@angular/router';

import { DocmentComponent } from './docment.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'docment', component: DocmentComponent },
    ])
    ],
    exports: [RouterModule]
})
export class DocmentRoutingModule { }
