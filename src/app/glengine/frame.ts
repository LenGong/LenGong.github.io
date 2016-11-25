import { Injectable, Renderer } from '@angular/core';

@Injectable()
export class Frame {
    constructor() {}
    /**
     * 获得一个canvas
     * @param  {Renderer} renderer 一个renderer
     * @param  {string} elem canvas的父元素的字符
     * @param  {string} width='800px' 画布宽度
     * @param  {string} height='600px' 画布高度
     * @param  {string} bgColor='' 画布背景色
     * @return {Object} 返回这个canvas
     */
    creatCanvas(renderer: Renderer, elem: string, width = '800px', height = '600px', bgColor = '') {
      let gamev = document.createElement('canvas');

      renderer.setElementStyle(gamev, 'display', 'block');
      renderer.setElementStyle(gamev, 'width', width);
      renderer.setElementStyle(gamev, 'height', height);
      renderer.setElementStyle(gamev, 'backgroundColor', bgColor);

      let prarentElement = renderer.selectRootElement(elem);
      renderer.projectNodes(prarentElement, [gamev]);

      return gamev;
    }

}
