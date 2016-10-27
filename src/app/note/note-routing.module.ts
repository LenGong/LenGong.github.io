import { NgModule }  from '@angular/core';
import { RouterModule } from '@angular/router';

import { NoteComponent } from './note.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'note', component: NoteComponent },
    ])
    ],
    exports: [RouterModule]
})
export class NoteRoutingModule {}
