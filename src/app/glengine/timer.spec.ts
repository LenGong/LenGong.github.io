import { Timer } from './timer';

import { fakeAsync, tick} from '@angular/core/testing';
//mock一个类
class Elf {
    constructor(public intervalTime: number, public randomCode: string) { }
}

describe('测试Timer类', () => {
    beforeEach(() => {
      this.timer = Timer.creat();
    });

    it('检查Timer类的各方法是否正确', fakeAsync((): void => {

        let elves: Array<Elf>;
        let intervalTime = 0;
        // 1秒产生一个mock对象
        this.inval = setInterval(() => {
            let uni ='';
            for(let i = 0; i < 4; i++){
              uni += String.fromCodePoint(Math.trunc(((Math.random()+96) * 100)));
            }
            this.elf = new Elf(intervalTime++, uni);
        }, 1000);

        // 开始Timer类的这个start方法
        this.subscription = this.timer.start(1000, () => this.elf);

        tick(100);
        elves = this.timer.getElves();
        console.log("0.1s输出数组里的对象应为空：");
        console.log(elves);
        expect(elves.length).toEqual(0);

        tick(900);
        elves = this.timer.getElves();
        console.log("1s输出数组里的对象应有1个：");
        console.log(elves);
        expect(elves.length).toEqual(1);

        tick(2000);
        elves = this.timer.getElves();
        console.log("3s输出数组里的对象应有3个：");
        console.log(elves);
        expect(elves.length).toEqual(3);

        this.timer.destroyElf(elves[1]);
        console.log("3s时消毁第2个对象,还有2个：");
        console.log(elves);
        expect(elves.length).toEqual(2);

        tick(3000);
        elves = this.timer.getElves();
        console.log("6s输出数组里的对象应有5个：");
        console.log(elves);
        expect(elves.length).toEqual(5);

        //清理
        clearInterval(this.inval);
        this.subscription.unsubscribe();
        this.timer = null;
    }));
});
