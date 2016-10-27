import { Component, Inject } from '@angular/core';
import { TitleConfig, Btitle } from '../../core';

@Component({
  selector: 'ft-nav',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footTitle:Btitle = this.TConfig;
  constructor(@Inject(TitleConfig) private TConfig:Btitle) {  }
}
