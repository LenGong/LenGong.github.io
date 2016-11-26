import { NgModule }  from '@angular/core';
import { RouterModule } from '@angular/router';

import { PictureComponent } from './picture.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'picture', component: PictureComponent },
    ])
    ],
    exports: [RouterModule]
})
export class PictureRoutingModule {}
