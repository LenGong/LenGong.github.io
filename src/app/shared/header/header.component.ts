import { Component, Inject, OnInit, DoCheck, Input } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { TitleConfig, Btitle } from '../../core';

@Component({
    selector: 'hd-nav',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
    @Input() wheel: boolean;
    readonly logo = this.TConfig.logo;
    readonly captions = this.TConfig.captions;
    isEx: boolean;
    isCss: boolean;

    constructor(
        @Inject(TitleConfig) private TConfig: Btitle,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.url.forEach((url: UrlSegment[]) => {
            this.isEx = this.isCss = (url[0].path === '') ? true : false;
        });
    }

    ngDoCheck() {
        if (this.route.firstChild) {
            this.route.firstChild.url.forEach((url: UrlSegment[]) => {
                this.isCss = (url[0].path === 'main') ? true : false;
            });
        };
    }

    onClickEx(curr?: string): void {
        this.isEx = !this.isEx;
        if (curr === "main") {
            this.isEx = true;
        }

        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
}
