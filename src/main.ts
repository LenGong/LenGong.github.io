import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

//导入自已的
import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
