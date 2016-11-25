//TODO:需要注入加
//import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

//TODO:需要注入加
//@Injectable()
export class Timer {
    /**
     * 一个elf对象数组
     * @type {Array<Object>}
     */
    private elves: Array<Object> = [];
    /**
     * 构建一个Timer类
     * @return {Object} 这个Timer对象
     */
    static creat(){
      return new Timer;
    }
    /**
     * 定时取得一个elf对象，并放入elves数组里。
     * @param  {number} timer 定时时间
     * @param  {()=>Object} getElf 回调取不同对象
     * @return {subscription}
     */
    start(timer: number, getElf:() => Object) {
        return Observable.interval(timer).subscribe(() => { this.elves.push(getElf());});
    }
    //得到elves
    getElves(): Array<Object>{
      return this.elves;
    }
    //消毁一个elf
    destroyElf(elf: Object): void  {
      this.elves.splice(this.elves.indexOf(elf), 1);
      elf = null;
    }
}
