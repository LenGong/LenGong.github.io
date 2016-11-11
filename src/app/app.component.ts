import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import "../public/rxjs/rxjs-extensions";

@Component({
    selector: 'blog-app',
    template: `
  <hd-nav [wheel]="isWheel"></hd-nav>
  <router-outlet></router-outlet>
  <ft-nav></ft-nav>
  `
})
export class AppComponent implements OnInit {

    isWheel: boolean = false;

    ngOnInit() {
        // 监视屏动，事件方法。
        // window.addEventListener('scroll', () => {
        //     this.isWheel = (window.pageYOffset > 120) ? true : false;
        // }, false);

        // 流方法
        let win = Observable.fromEvent(window, 'scroll');
        win.subscribe(() => {this.isWheel = (window.pageYOffset > 120) ? true : false;});
    }
}
