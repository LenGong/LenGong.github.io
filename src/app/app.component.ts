import { Component } from '@angular/core';

@Component({
  selector: 'blog-app',
  template: `
  <hd-nav></hd-nav>
  <router-outlet></router-outlet>
  <ft-nav></ft-nav>
  `
})
export class AppComponent {}
