import { Component } from '@angular/core';
import { Frame, LoadRes } from '../../glengine';

@Component({
  template: '<ship-rock></ship-rock>',
  providers: [Frame, LoadRes]
})
export class ShipRootComponent {}
