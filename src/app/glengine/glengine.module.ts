
import { NgModule, OpaqueToken } from '@angular/core';

import { Draw, ElementEvent, Frame, KEY_MAP, LoadRes, Timer } from './';

export const KeyMapCofig = new OpaqueToken('keyMapCofig');

@NgModule({
    providers: [
        Draw,
        ElementEvent,
        Frame,
        LoadRes,
        Timer,
        { provide: KeyMapCofig,  useValue: KEY_MAP }
    ]
})
export class GlengineModule {}

