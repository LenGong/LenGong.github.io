import { Component, OnInit, OnDestroy } from '@angular/core';

import { Main } from './demons/main';

@Component({
  selector: 'ship-rock',
  template: "<div>This is placeholder of temp</div>"
})
export class ShipRockComponent implements OnInit, OnDestroy {
  subscription: any

  constructor(private main: Main) { }

  ngOnInit() {
    this.subscription = this.main.initRun();
  }

  ngOnDestroy() {
    this.main.stopSounds();
    this.subscription.forEach((element: any) => {
      element.unsubscribe()
    });
  }
}
