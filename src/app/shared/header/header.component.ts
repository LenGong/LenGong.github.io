import { Component,  Inject } from '@angular/core';

import { TitleConfig, Btitle } from '../../core';

@Component({
  selector: 'hd-nav',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo = this.TConfig.logo;
  captions = this.TConfig.captions;
  isEx = true;

  constructor(@Inject(TitleConfig) private TConfig:Btitle) {  }

  onClickEx(){
    this.isEx = !this.isEx;
  }
}
