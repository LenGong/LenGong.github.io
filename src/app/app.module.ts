

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//启动组件
import { AppComponent } from './app.component';

//头部、脚部
import { HeaderComponent, FooterComponent } from './shared';

//核心模块，包括全应用服务
import { CoreModule }  from './core';

//特性模块
import { MainModule } from './main';
import { DocmentModule } from './docment';
import { GameModule } from './game';
// import { NoteModule } from './note';
import { PictureModule } from './picture';
import { ResumeModule } from './resume';

import { routing } from './app.routing';


@NgModule({
  imports: [BrowserModule,
    CoreModule,
    routing,
    MainModule,
    DocmentModule,
    GameModule,
    // NoteModule,
    PictureModule,
    ResumeModule
  ],
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
