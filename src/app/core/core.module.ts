import { NgModule, Optional, SkipSelf, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BTITLE } from './nav-title.value';

export const TitleConfig = new OpaqueToken('config');

@NgModule({
    imports: [CommonModule],
    providers: [{provide:TitleConfig, useValue:BTITLE }]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
