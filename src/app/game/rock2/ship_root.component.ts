import { Component } from '@angular/core';
import { Main } from './demons/main';

@Component({
  template: '<ship-rock></ship-rock>',
  providers: [Main]
})
export class ShipRootComponent {}
