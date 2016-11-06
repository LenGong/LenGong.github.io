import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', redirectTo: 'main', pathMatch:'full' },
        { path: 'game', loadChildren: "es6-promise!./game/game.module#GameModule" },
        { path: 'picture', loadChildren: "es6-promise!./picture/picture.module#PictureModule" },
    ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
