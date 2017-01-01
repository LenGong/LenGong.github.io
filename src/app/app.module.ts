
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//核心模块，包括全应用服务
import { CoreModule }  from './core';

//启动组件
import { AppComponent } from './app.component';

//主路由
import { AppRoutingModule } from './app-routing.module';

//头部、脚部模板
import { SharedModule, HeaderComponent, FooterComponent } from './shared';

//特性模块
import { MainModule } from './main';
import { DocmentModule } from './docment';
import { NoteModule } from './note';
import { GameModule } from './game';
import { PictureModule } from './picture';
//按需加载的模块
//import { ResumeModule } from './resume';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    MainModule,
    DocmentModule,
    NoteModule,
    GameModule,
    PictureModule,
  //  ResumeModule,
  ],
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
