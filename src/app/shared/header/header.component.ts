import { Component, Inject, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { TitleConfig, Btitle } from '../../core';

@Component({
    selector: 'hd-nav',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
    readonly logo = this.TConfig.logo;
    readonly captions = this.TConfig.captions;
    isEx: boolean = true;
    isCss: boolean;

    constructor(
        @Inject(TitleConfig) private TConfig: Btitle,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.isEx = true;
        this.route.url.forEach((url: UrlSegment[]) => {
            this.isCss = (url[0].path === '') ? true : false;
        });
    }

    ngDoCheck() {
        if (this.route.firstChild) {
            this.route.firstChild.url.forEach((url: UrlSegment[]) => {
                this.isCss = (url[0].path === 'main') ? true : false;
            });
        };
    }

    onClickEx(): void {
        this.isEx = !this.isEx;
    }
}
