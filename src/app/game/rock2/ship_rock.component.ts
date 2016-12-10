import { Component, OnInit, OnDestroy } from '@angular/core';

import { Main } from './demons/main';

@Component({
  selector: 'ship-rock',
  template: `
  <div  style= "width: 60%; margin: auto">
    <h4 class="text-center">游戏加载中：<span style="color:blue">{{lwidth}}</span></h4>
    <div class="progress">
      <div class="progress-bar progress-bar-warning progress-bar-striped active" [style.width] = "lwidth" >
      </div>
    </div>
  </div>`,
})
export class ShipRockComponent implements OnInit, OnDestroy {
  subscription: any
  lwidth: string;

  constructor(private main: Main) { }

  ngOnInit() {
    this.subscription = this.main.initRun();
    this.lwidth = this.main.lwidth
  }

  ngOnDestroy() {
    this.main.stopSounds();
    this.subscription.forEach((element: any) => {
      element.unsubscribe()
    });
  }
}
