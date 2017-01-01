import { NgModule, Optional, SkipSelf, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BTITLE } from './nav-title.value';
import { MainService } from './main.service';

export const TitleConfig = new OpaqueToken('config');

@NgModule({
    imports: [CommonModule, HttpModule],
    providers: [{provide:TitleConfig, useValue:BTITLE },
    MainService]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
