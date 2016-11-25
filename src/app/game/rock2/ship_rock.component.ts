import { Component, OnInit, Renderer, Input} from '@angular/core';

//测试
import { Frame, LoadRes } from '../../glengine';
declare let require:any;

@Component({
  selector: 'ship-rock',
  template: `
  <div style= " width: 60%; margin: auto">
    <h4 class="text-center">游戏加载中：<span style="color:blue">{{lwidth}}</span></h4>
    <div class="progress">
      <div class="progress-bar progress-bar-warning progress-bar-striped active" [style.width] = "lwidth" >
      </div>
    </div>
  </div>`,
})
export class ShipRockComponent implements OnInit {
  lwidth: string = '1%';

  constructor(private renderer: Renderer, private frame: Frame, private loadRes: LoadRes) { }

  ngOnInit() {
    this.init();
  }

  //初始化资源以及开始frame
  private init() {
    //装载图片
    this.loadRes.loadImages({
      asteroidBlue: require("./res/img/asteroid_blue.png"),
      back: require('./res/img/back.png'),
      debris2Blue: require('./res/img/debris2_blue.png'),
      doubleShip: require('./res/img/double_ship.png'),
      explosionAlpha: require('./res/img/explosion_alpha.png'),
      nebulaBluef: require('./res/img/nebula_bluef.png'),
      shot2: require('./res/img/shot2.png'),
      splash: require('./res/img/splash.png',)
    },(x) => {
      this.lwidth = Math.trunc(x / 8 * 100) + '%'; console.log(this.lwidth)});
    //装载声音
    this.loadRes.loadSounds({
      explosion: require( './res/sound/explosion.mp3'),
      missile: require('./res/sound/missile.mp3'),
      soundtrack: require('./res/sound/soundtrack.mp3'),
      thrust: require('./res/sound/thrust.mp3')
    });
    //构建一个画布
    // let height = window.innerHeight - 70 + 'px'
    // let cansv = this.frame.creatCanvas(this.renderer, 'ship-rock', '100%', height);
    // // //装载动画
    // let cxt = cansv.getContext('2d');
    // let images = this.loadRes.getImages();

  }
}
