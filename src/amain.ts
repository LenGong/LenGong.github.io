import { platformBrowser }    from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory} from './app/app.module.ngfactor';

if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModuleNgFactory);
