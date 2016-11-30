import {
  Component,
  OnInit,
  trigger,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { LoadRes } from '../glengine';

import { imgfile } from './feiji/imagesinfo';

declare let require: any;


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
      box-shadow: 6px 6px 4px #888;
    }
  `],
  animations: [
    trigger('imgState',
      [
        transition(':enter', [
          style({ transform: 'scale(1.5)' }),
          animate('3s', keyframes([
            style({ transform: 'scale(0)', offset: 0.1 }),
            style({ transform: 'scale(0.2)', offset: 0.2 }),
            style({ transform: 'scale(0)', offset: 0.8 }),
            style({ transform: 'scale(1)', offset: 1 }),
          ]))
        ]),
        transition(':leave', [
          animate(
            '3s ease-in',
            style({ transform: 'matrix(0.1, 0.2, 0.3, -0.1, 0, 0)' })
          )
        ])
      ]
    )
  ],
  providers: [LoadRes]
})
export class PictureComponent implements OnInit {

  mwidth: string = '1%';
  loadflag: boolean = true;

  fils: boolean = true;
  fil: boolean = false;
  stat: boolean = false;

  images:Array<Object> = [];
  img: any;
  height: string;
  margin: string;
  loadSate: string = "图片加载中...";

  constructor(private loadres: LoadRes) {}

  ngOnInit() {
    this.initImg();
    this.readImgs();
  }
  //装载图片
  initImg() {
    let imgs = {};
    imgfile.forEach(e => {
      let path = ('./feiji' + e.path).replace(/\.jpg$/, '');
      imgs[e.id] = require(path+'.jpg')});

    let leng = imgfile.length;

    this.loadres.loadImages(imgs, (x) => {
      this.mwidth = Math.trunc(x / leng * 100) + '%';
      if (!x) {
        this.loadSate = "加载失败!";
      }
      else if (x === leng) {
        this.loadSate = "加载成功!"
        setTimeout(() => { this.loadflag = false; }, 1000)
      }
    })
  }
  //读取图片到数组
  readImgs() {
    let ims = this.loadres.getImages();
    console.log(ims);
    let i = 0;
    for (let key in imgfile) {
      let obj = {
        id: imgfile[key].id,
        title: imgfile[key].title,
        describe: imgfile[key].describe,
        path: ims[imgfile[key].id].src
      }
      this.images[i] = obj;
      i++;
    }
  }
  //放大图
  onclick(img?: any) {
    if (!this.stat && img) {
      let num = document.documentElement.scrollTop || document.body.scrollTop;
      this.margin = num + 'px';
      document.body.style.overflow = 'hidden';
      this.img = img;
      this.height = (window.innerHeight * 0.7) + 'px';

      this.fils = false;
      this.fil = true;
    }
    else if (this.stat) {
      this.fil = false;
    }
  }
  //动画回调
  late() {
    this.stat = !this.stat;
    if (!this.fil) {
      this.fils = true;
      document.body.style.overflow = 'visible';
    }
  }
}
