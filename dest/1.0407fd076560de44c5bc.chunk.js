webpackJsonp([1,3],{306:function(t,e,n){"use strict";var r=n(1),o=n(29),i=n(607),a=n(605);n.d(e,"GameModule",function(){return l});var c=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){}return t=c([n.i(r.u)({imports:[o.b,i.a],declarations:[a.a]}),s("design:paramtypes",[])],t)}()},308:function(t,e,n){"use strict";var r=n(144),o=n(306),i=n(208),a=n(145),c=n(607),s=n(79),l=n(611),_=n(143),u=n(605),h=n(65);n.d(e,"GameModuleNgFactory",function(){return d});var p=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},f=function(t){function e(e){t.call(this,e,[l.a],[])}return p(e,t),Object.defineProperty(e.prototype,"_NgLocalization_4",{get:function(){return null==this.__NgLocalization_4&&(this.__NgLocalization_4=new s.c(this.parent.get(_.a))),this.__NgLocalization_4},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ROUTES_5",{get:function(){return null==this.__ROUTES_5&&(this.__ROUTES_5=[[{path:"",component:u.a}]]),this.__ROUTES_5},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new i.a,this._RouterModule_1=new a.b(this.parent.get(a.d,null)),this._GameRoutingModule_2=new c.a,this._GameModule_3=new o.GameModule,this._GameModule_3},e.prototype.getInternal=function(t,e){return t===i.a?this._CommonModule_0:t===a.b?this._RouterModule_1:t===c.a?this._GameRoutingModule_2:t===o.GameModule?this._GameModule_3:t===s.b?this._NgLocalization_4:t===h.c?this._ROUTES_5:e},e.prototype.destroyInternal=function(){},e}(r.a),d=new r.b(f,o.GameModule)},605:function(t,e,n){"use strict";var r=n(1);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=o([n.i(r.M)({template:n(609)}),i("design:paramtypes",[])],t)}()},607:function(t,e,n){"use strict";var r=n(1),o=n(64),i=n(605);n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t=a([n.i(r.u)({imports:[o.a.forChild([{path:"",component:i.a}])],exports:[o.a]}),c("design:paramtypes",[])],t)}()},609:function(t,e){t.exports='<div class="container">\n  <h2>这是<span class="bg-danger">游戏</span>部份模块的地方---测试</h2>\n</div>\n'},611:function(t,e,n){"use strict";function r(t,e,n){return null===d&&(d=t.createRenderComponentType("",0,u.b.None,[],{})),new m(t,e,n)}function o(t,e,n){return null===R&&(R=t.createRenderComponentType("",0,u.b.None,g,{})),new b(t,e,n)}var i=n(605),a=n(36),c=n(24),s=n(10),l=n(19),_=n(12),u=n(31),h=n(30);n.d(e,"a",function(){return y});var p=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},f=function(){function t(){this.changed=!1,this.context=new i.a}return t.prototype.detectChangesInInputProps=function(t,e,n){var r=this.changed;return this.changed=!1,r},t.prototype.detectChangesInHostProps=function(t,e,n){},t}(),d=null,m=function(t){function e(n,r,o){t.call(this,e,d,l.a.HOST,n,r,o,_.f.CheckAlways)}return p(e,t),e.prototype.createInternal=function(t){this._el_0=s.selectOrCreateRenderHostElement(this.renderer,"ng-component",s.EMPTY_INLINE_ARRAY,t,null),this._appEl_0=new c.a(0,null,this,this._el_0);var e=o(this.viewUtils,this.injector(0),this._appEl_0);return this._GameComponent_0_4=new f,this._appEl_0.initComponent(this._GameComponent_0_4.context,[],e),e.create(this._GameComponent_0_4.context,this.projectableNodes,null),this.init([].concat([this._el_0]),[this._el_0],[],[]),this._appEl_0},e.prototype.injectorGetInternal=function(t,e,n){return t===i.a&&0===e?this._GameComponent_0_4.context:n},e.prototype.detectChangesInternal=function(t){this._GameComponent_0_4.detectChangesInInputProps(this,this._el_0,t),this.detectContentChildrenChanges(t),this._GameComponent_0_4.detectChangesInHostProps(this,this._el_0,t),this.detectViewChildrenChanges(t)},e}(a.a),y=new h.a("ng-component",r,i.a),g=[],R=null,b=function(t){function e(n,r,o){t.call(this,e,R,l.a.COMPONENT,n,r,o,_.f.CheckAlways)}return p(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.declarationAppElement.nativeElement);return this._el_0=s.createRenderElement(this.renderer,e,"div",new s.InlineArray2(2,"class","container"),null),this._text_1=this.renderer.createText(this._el_0,"\n  ",null),this._el_2=s.createRenderElement(this.renderer,this._el_0,"h2",s.EMPTY_INLINE_ARRAY,null),this._text_3=this.renderer.createText(this._el_2,"这是",null),this._el_4=s.createRenderElement(this.renderer,this._el_2,"span",new s.InlineArray2(2,"class","bg-danger"),null),this._text_5=this.renderer.createText(this._el_4,"游戏",null),this._text_6=this.renderer.createText(this._el_2,"部份模块的地方---测试",null),this._text_7=this.renderer.createText(this._el_0,"\n",null),this._text_8=this.renderer.createText(e,"\n",null),this.init([],[this._el_0,this._text_1,this._el_2,this._text_3,this._el_4,this._text_5,this._text_6,this._text_7,this._text_8],[],[]),null},e}(a.a)}});
//# sourceMappingURL=1.0407fd076560de44c5bc.chunk.js.map