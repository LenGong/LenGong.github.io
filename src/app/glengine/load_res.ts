import { Injectable } from '@angular/core';

@Injectable()
export class LoadRes {
  private images:any = {state: 0};
  private sounds:any = {};

  constructor ( ) { }
  /**
   * 装载图片，并设置this.images这个对象的属性
   * @param  {Object} images 一个图片组路径对象
   * @param  {Fncution} fn 一个因调子涵数
   */
  loadImages(images:any, fn = (x:number)=>{}) {
    if(!this.images.state){
      for (let img in images) {
        this.images[img] = new Image();
        this.images[img].onload = () => {
          this.images.state++;
          fn(this.images.state);
        }
        this.images[img].onerror = () => {
          this.images.state = 0;
          fn(this.images.state);
          throw "错误：图片加载失败！";
        }
        this.images[img].src = images[img];
      }
    }
    else{
      fn(this.images.state);
    }
  }
  //加载声音
  loadSounds(sounds: any) {
    for (let sound in sounds) {
      this.sounds.sound = sounds.sound;
    }
  }
  //得到图片组对象
  getImages () {
    return this.images;
  }
  //得到声音组对象
  getSounds () {
    return this.sounds;
  }
}
