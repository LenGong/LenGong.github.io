import { Injectable, Renderer } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Draw } from './draw';

@Injectable()
export class Frame {

  private width: number;
  private height: number;
  private glCanvas: any;
  public draw: any;

  constructor(private mydraw: Draw) { }
  /**
   * 获得一个canvas
   * @param  {Renderer} renderer 一个renderer
   * @param  {string} elem canvas的父元素的字符
   * @param  {string} width='800px' 画布宽度
   * @param  {string} height='600px' 画布高度
   * @param  {string} bgColor='' 画布背景色
   */
  creatCanvas(renderer: Renderer, elem: string, width = '800', height = '600', bgColor = '', bgImg?: any) {
    let gamev = document.createElement('canvas');

    renderer.setElementStyle(gamev, 'display', 'block');
    renderer.setElementAttribute(gamev, 'width', width);
    renderer.setElementAttribute(gamev, 'height', height);
    renderer.setElementStyle(gamev, 'position', 'absolute');
    renderer.setElementStyle(gamev, 'left', '0');
    renderer.setElementStyle(gamev, 'top', '0');

    renderer.setElementStyle(gamev, 'zIndex', '10000');
    renderer.setElementStyle(gamev, 'margin', '0 auto');
    renderer.setElementStyle(gamev, 'backgroundColor', bgColor);
    if (bgImg) {
      renderer.setElementStyle(gamev, 'backgroundImage', `url(${bgImg})`);
    }

    let prarentElement = renderer.selectRootElement(elem);
    renderer.projectNodes(prarentElement, [gamev]);

    this.width = parseInt(width);
    this.height = parseInt(height);
    this.glCanvas = gamev.getContext('2d');
    
    this.mydraw.setglCanvas(this.glCanvas);
  }

  start() {
    return Observable.interval(1000 / 60).subscribe(() => {
      this.glCanvas.clearRect(0, 0, this.width, this.height);
      this.draw();
    });
  }
}
