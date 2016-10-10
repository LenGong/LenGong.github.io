import { Component, Inject } from '@angular/core';
import { TitleConfig, Btitle } from '../../core';

@Component({
  selector: 'ft-nav',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(@Inject(TitleConfig) private TConfig:Btitle) {  }
}
