import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadRes } from '../glengine';

declare let require:any;

@Component({
  templateUrl: './picture.component.html',
  styles: [`
    .sm {
      width: 100%;
      height: 180px;
      cursor: pointer;
    }
    .lg {
      width: 100%;
      cursor: pointer;
    }
    .shaw{
      padding:0;
      box-shadow: 6px 6px 4px #AAA;
    }
  `],
  providers: [LoadRes]
})
export class PictureComponent implements OnInit {
  mwidth: string = '1%';
  flag: boolean = true;
  fl:boolean = false;
  images:Array<string> = [];
  img: any;
  height: string;
  margin: string;
  loadSate: string = "图片加载中...";

  constructor(private loadres: LoadRes){}

  ngOnInit(){
    this.initImg();
    this.readImgs();
  }
  //装载图片
  initImg(){
    let imgs = {
      c1: require('./feiji/c1.jpg'),
      c2: require('./feiji/c2.jpg'),
      c3: require('./feiji/c3.jpg'),
      c4: require('./feiji/c4.jpg'),
      c5: require('./feiji/c5.jpg'),
      c6: require('./feiji/c6.jpg'),
      c7: require('./feiji/c7.jpg'),
      c8: require('./feiji/c8.jpg'),
      c9: require('./feiji/c9.jpg'),
      c10: require('./feiji/c10.jpg'),
      c11: require('./feiji/c11.jpg'),
      c12: require('./feiji/c12.jpg'),
      c13: require('./feiji/c13.jpg'),
      c14: require('./feiji/c14.jpg'),
      c15: require('./feiji/c15.jpg'),
      c16: require('./feiji/c16.jpg'),
      c17: require('./feiji/c17.jpg'),
      c18: require('./feiji/c18.jpg'),
      c19: require('./feiji/c19.jpg'),
      c20: require('./feiji/c20.jpg'),
      c21: require('./feiji/c21.jpg'),
      c22: require('./feiji/c22.jpg'),
      c23: require('./feiji/c23.jpg'),
      c24: require('./feiji/c24.jpg'),
      c25: require('./feiji/c25.jpg'),
      c26: require('./feiji/c26.jpg'),
      c27: require('./feiji/c27.jpg'),
      c28: require('./feiji/c28.jpg'),
    };
    this.loadres.loadImages(imgs, (x) => {
      this.mwidth = Math.trunc(x / 28 * 100) + '%';
      if(!x){
        this.loadSate = "加载失败!";
      }
      else if(x === 28){this.flag = false; this.loadSate = "加载成功！"}
    })
  }
  //读取图片到数组
  readImgs(){
    let ims = this.loadres.getImages();
    let i = 0;
    for(let key in ims){
      if(key != 'state'){
        this.images[i++] = ims[key];
      }
    }
  }
  //放大图
  onclick(img?:any){
    let num = document.documentElement.scrollTop || document.body.scrollTop;
    this.margin = num + 'px';
    this.fl = !this.fl;
    if(img){
      document.body.style.overflow = 'hidden';
      this.img = img;
      this.height = (window.innerHeight * 0.8) + 'px';
    }
    else{
      document.body.style.overflow = 'visible';
    }
  }
}
