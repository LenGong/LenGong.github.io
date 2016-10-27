import { Component, Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { TitleConfig, Btitle } from '../../core';

@Component({
    selector: 'hd-nav',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    logo = this.TConfig.logo;
    captions = this.TConfig.captions;
    isEx:boolean = true;
    isCss: boolean;

    constructor(
        @Inject(TitleConfig) private TConfig: Btitle,
        private route: ActivatedRoute,
    ) {}

    // ngOnInit() { this.onClickEx(); }

    onClickEx(): void {
        this.isEx = !this.isEx;
        this.route.firstChild.url.forEach(url => {
            this.isCss = (url[0].path === 'main') ? true : false;
        })
    }
}
