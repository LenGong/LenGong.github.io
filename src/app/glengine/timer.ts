//TODO:需要注入加， 已完成
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

//TODO:需要注入加, 已完成
@Injectable()
export class Timer {
    /**
     * 构建一个Timer类
     * @return {Object} 这个Timer对象
     */
    // static creat(){
    //   return new Timer;
    // }
    /**
     * 定时取得一个elf对象，并放入elves数组里。
     * @param  {number} timer 定时时间
     * @param  {()=>Object} getElf 回调取不同对象
     * @return {subscription}
     */
    start(timer: number, fn:any) {
        return Observable.interval(timer);
    }
}
