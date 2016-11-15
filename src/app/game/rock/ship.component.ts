// 导入rock各种。
import simpleGui from './js/simplegui';
import {
    init_ship,
    rock_spawner,
    click,
    draw,
    keyup,
    keydown,
    stop
} from './js/shiprock';

import { Component, OnInit, OnDestroy, Renderer } from '@angular/core';

@Component({
    templateUrl: './ship.component.html',
    styleUrls: ['./ship.component.css'],
})
export class ShipComponent implements OnInit, OnDestroy {

    constructor(private renderer: Renderer) { }

    ngOnInit() {
        this.getCanvas()
    }

    ngOnDestroy(){
      stop();
    }

    getCanvas() {

        // 构建一个游戏平台对象
        let myCanvas = this.renderer.selectRootElement('canvas');
        let frame = simpleGui.createFrame(myCanvas);

        // 设置游戏画布颜色和图片前景。
        let color = 'rgba(245,200,21,0.3)';
        let img = 'url(' + require('./res/img/nebula_blue.f2014.png') + ')';
        frame.setCanvasBackground(color, img);

        // 设多久产生一个rock_spawner
        let timer = simpleGui.createTimer(1000.0 - init_ship * 20, rock_spawner);

        // 加载各种handle
        frame.setClickHandle(click);
        frame.setKeyupHandle(keyup);
        frame.setKeydownHandle(keydown);
        frame.setDrawHandle(draw);

        // 开始画布循不和石头产生器
        timer.start();
        frame.start();
    }


}
