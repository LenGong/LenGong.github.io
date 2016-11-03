import { Component, OnInit } from '@angular/core';

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
        // let body = document.body;
        // body.addEventListener('mousewheel', () => {
        //     this.isWheel = (body.scrollTop > 120) ? true : false;
        //     console.log(body.scrollTop)
        // }, false);
        // 监视屏动，上面方法改用下面的。
        window.addEventListener('scroll', () => {
            this.isWheel = (window.pageYOffset > 120) ? true : false;
        }, false);
    }
}
