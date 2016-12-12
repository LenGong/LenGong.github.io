import { Injectable, Inject, Renderer } from '@angular/core';
import { Router } from '@angular/router';
//导入glengine部份
import { Frame, LoadRes, KeyMapCofig, KeyMap, Timer, Draw, ElementEvent } from '../../../glengine';
//导入资源及Ship and Sprite 类
import { images, sounds } from '../res/res';
import { Ship } from './ship';
import { Sprite } from './Sprite';

@Injectable()
export class Main {
    //画布宽高
    private width: number = 800;
    private height: number = 600;
    //加载资源部份
    public lwidth: string = '1%';
    private images: any;
    private imagesInfo: any;
    private sounds: any;
    //初始部份
    private times = 0;
    private started = false
    private my_ship: Ship;
    private init_ship = 1;
    private mark = false;
    private lives = 3;
    private score = 0;
    private flag = false;
    private loadFlag = false;
    //收集组
    private rock_group: any = [];
    private missile_group: any = [];
    private explosion_group: any = [];
    //屏键部份
    private keyInter = false;
    private keyWord = "开";
    private sleft = false;
    private sright = false;

    constructor(private router: Router, private renderer: Renderer, private frame: Frame, private loadRes: LoadRes, private elm: ElementEvent, private mdraw: Draw, private timer: Timer, @Inject(KeyMapCofig) private keymap: KeyMap) { }

    //初始化并运行游戏
    public initRun() {
        //装载声音
        this.loadRes.loadSounds(sounds);
        //装载图片
        this.loadRes.loadImages(images[0], (x) => {
            this.lwidth = Math.trunc(x / 7 * 100) + '%';
            if (x === 7) { this.loadFlag = true; }
        });
        //获得图片、声音对象
        this.images = this.loadRes.getImages();
        this.imagesInfo = images[1];
        this.sounds = this.loadRes.getSounds();
        //构建一个画布
        this.launchFullscreen(this.renderer.selectRootElement('ship-rock'));
        this.width = screen.width;
        this.height = screen.height;
        this.frame.creatCanvas(this.renderer, 'ship-rock', this.width + '', this.height + '', "#AAA", this.images.nebulaBluef.src);
        //构建飞船
        this.my_ship = new Ship([this.width / 2, this.height / 2], [0, 0], 3.14, this.images.doubleShip, this.imagesInfo.doubleShip, this.sounds.thrust);
        //不定时产生太空石
        let subscript0 = this.timer.start(1000 - this.init_ship * 20, this.rock_spawner).subscribe(() => { this.rock_spawner() });
        //设置事件
        let subscrip1 = this.allEvent();
        //画循环
        this.frame.draw = () => { this.draw(this.mdraw) };
        //开始
        let subscrip2 = this.frame.start();
        return [subscript0, ...subscrip1, subscrip2];
    }

    //停声音：
    public stopSounds() {
        this.sounds.soundtrack.pause();
    }

    //事件集
    private allEvent() {
        let subKeydown = this.elm.keydown(document)
            .subscribe((e) => {
                switch (e) {
                    case this.keymap['left']:
                        if (!this.mark) {
                            this.my_ship.decrement_angle_vel();
                            this.mark = true;
                        }
                        break;
                    case this.keymap['right']:
                        if (!this.mark) {
                            this.my_ship.increment_angle_vel();
                            this.mark = true;
                        }
                        break;
                    case this.keymap['up']:
                        this.my_ship.set_thrust(true);
                        break;
                    case this.keymap['space']:
                        this.my_ship.shoot((missile_pos: Array<number>, missile_vel: Array<number>, angle: number) => {
                            missile_vel = [missile_vel[0] * this.width / 1600, missile_vel[1] * this.width / 1600];
                            if (this.missile_group.length < 3) {
                                var a_missile = new Sprite(missile_pos, missile_vel, angle, 0, this.images.shot2, this.imagesInfo.shot2, this.sounds.missile);
                                this.missile_group.push(a_missile);
                            }
                        });
                        break;
                    case this.keymap['esc']:
                        this.router.navigate(['../game']);
                        break;
                    case this.keymap['F11']:
                        this.router.navigate(['../game']);
                        break;
                }
            });

        let subKeyup = this.elm.keyup(document)
            .subscribe((e) => {
                switch (e) {
                    case this.keymap['left']:
                        if (this.mark) {
                            this.my_ship.increment_angle_vel();
                            this.mark = false;
                        }
                        break;
                    case this.keymap['right']:
                        if (this.mark) {
                            this.my_ship.decrement_angle_vel();
                            this.mark = false;
                        }
                        break;
                    case this.keymap['up']:
                        this.my_ship.set_thrust(false);
                        break;
                    case this.keymap['esc']:
                        this.router.navigate(['../game']);
                        break;
                    case this.keymap['F11']:
                        this.router.navigate(['../game']);
                        break;
                }
            });

        let subClick = this.elm.click(this.renderer.selectRootElement('canvas'))
            .subscribe((pos) => {
                this.splash(pos);
                this.exit(pos);
                this.inter(pos);
                this.shipleft(pos);
                this.shipright(pos);
                this.shipfront(pos);
                this.shipstop(pos);
                this.shipshoot(pos);
            });
        
        return [subKeydown, subKeyup, subClick];
    }

    private draw(canvas: any) {
        if (!this.loadFlag) {
            canvas.drawText("游戏加载中:" + this.lwidth, [this.width / 2 - 300, this.height / 2], 60, 'yellow');
        }
        else {
            //animiate background
            this.times++;
            let wtime = (this.times / 4) % this.width;
            let center = this.imagesInfo.debris2Blue.getCenter()
            let size = this.imagesInfo.debris2Blue.getSize()
            canvas.drawImage(this.images.debris2Blue, center, size, [wtime - this.width / 2, this.height / 2], [this.width, this.height])
            canvas.drawImage(this.images.debris2Blue, center, size, [wtime + this.width / 2, this.height / 2], [this.width, this.height])

            //draw UI
            canvas.drawText("战机", [50, 50], 20, "White");
            canvas.drawText("分数", [this.width - 100, 50], 20, "White");
            canvas.drawText(this.lives - 1, [50, 80], 22, "White");
            canvas.drawText(this.score, [this.width - 100, 80], 22, "White");

            if (this.score && !(this.score % 20) && this.flag) {
                this.init_ship++;
                this.flag = false;
                if (!(this.score % 100)) {
                    this.lives++;
                }
            }

            for (var i = 0; i < (this.lives - 1); i++) {
                canvas.drawImage(this.images.doubleShip, [45, 45], [90, 90], [80 + i * 30, 75], [400 / 10, 300 / 10], -1.57);
            }

            //画太空石
            this.process_sprite_group(canvas, this.rock_group);

            if (this.group_collide(this.my_ship)) {
                this.lives--;
                this.my_ship.pos = [this.width / 2, this.height / 2];
                this.my_ship.angle = 3.14;
                this.my_ship.vel = [0, 0];
            }

            if (!this.lives) {
                this.my_ship.pos = [this.width / 2, this.height / 2];
                this.my_ship.angle = 3.14;
                this.my_ship.vel = [0, 0];
                this.rock_group.splice(0, this.rock_group.length);
                this.missile_group.splice(0, this.missile_group.length);
                this.lives = 3;
                this.sounds.soundtrack.pause();
                this.started = false;
                this.keyInter = false;
                this.score = 0;
                this.init_ship = 1;
            }

            this.group_group_collide();
            this.process_sprite_group(canvas, this.missile_group);
            this.process_sprite_group(canvas, this.explosion_group);

            this.my_ship.draw(canvas);
            this.my_ship.update(this.width, this.height);

            //屏键控制
            if (this.started) {
                canvas.drawRect([this.width - 80, this.height - 40], [80, 30], 'red');
                canvas.drawText("屏键" + this.keyWord, [this.width - 73, this.height - 18], 22, "yellow");
            }

            if (this.keyInter) {
                canvas.drawRect([this.width - 80, this.height / 2 - 60], [40, 30], 'red');
                canvas.drawText("左", [this.width - 73, this.height / 2 - 38], 22, "yellow");
                canvas.drawRect([this.width - 80, this.height / 2 + 60], [40, 30], 'red');
                canvas.drawText("右", [this.width - 73, this.height / 2 + 82], 22, "yellow");

                canvas.drawRect([this.width - 120, this.height / 2], [40, 30], 'yellow');
                canvas.drawText("前", [this.width - 113, this.height / 2 + 22], 22, "red");
                canvas.drawRect([this.width - 40, this.height / 2], [40, 30], 'yellow');
                canvas.drawText("停", [this.width - 30, this.height / 2 + 22], 22, "red");

                canvas.drawRect([40, this.height / 2 - 40], [40, 80], 'red');
                canvas.drawText("射", [50, this.height / 2 + 11], 22, "yellow");
            }

            //draw splash screen if not started
            if (!this.started) {
                canvas.drawImage(this.images.splash, this.imagesInfo.splash.getCenter(),
                    this.imagesInfo.splash.getSize(), [this.width / 2, this.height / 2],
                    this.imagesInfo.splash.getSize());

                canvas.drawRect([this.width / 2 - 80, this.height / 2 + 80], [60, 30], 'red');
                canvas.drawText("开始", [this.width / 2 - 73, this.height / 2 + 102], 22, "yellow");

                canvas.drawRect([this.width / 2 + 20, this.height / 2 + 80], [60, 30], 'red');
                canvas.drawText("退出", [this.width / 2 + 27, this.height / 2 + 102], 22, "yellow");
            }
        }
    }

    process_sprite_group(canvas: any, group: any) {
        for (let i in group) {
            group[i].draw(canvas);
            if (group[i].update(this.width, this.height)) {
                group.splice(i, 1);
            }
        }
    }

    private group_collide(other: any) {
        for (let i in this.rock_group) {
            if (this.rock_group[i].collide(other)) {
                this.explosion_group.push(new Sprite(this.rock_group[i].pos, [0, 0], 0, 0, this.images.explosionAlpha, this.imagesInfo.explosionAlpha, this.sounds.explosion));
                this.rock_group.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    private group_group_collide() {
        for (let i in this.missile_group) {
            if (this.group_collide(this.missile_group[i])) {
                this.missile_group.splice(i, 1);
                this.score += 10;
                this.flag = true;
            }
        }
    }

    //spawns a rock
    private rock_spawner(): any {
        if ((this.rock_group.length < this.init_ship) && this.started) {
            let rock_pos = [Math.random() * this.width, Math.random() * this.height];

            let rock_vel = [Math.random() * .6 * this.init_ship / 5.0 - .3 * this.init_ship / 5.0,
            Math.random() * .6 * this.init_ship / 5.0 - .3 * this.init_ship / 5.0];

            let rock_avel = Math.random() * .2 * this.init_ship / 10.0 - .1 * this.init_ship / 10.0;
            this.rock_group.push(new Sprite(rock_pos, rock_vel, 0, rock_avel, this.images.asteroidBlue, this.imagesInfo.asteroidBlue));
        }
    }
    //全屏
    private launchFullscreen(element: any) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    //游戏开始菜单部份
    private splash(pos: Array<number>) {
        let ww = pos[0] - (this.width / 2 - 80);
        let hh = pos[1] - (this.height / 2 + 80);

        if ((ww > 0 && ww < 60) && (hh > 0 && hh < 30)) {
            this.started = true;
            this.sounds.soundtrack.play();
        }
    }

    private exit(pos: Array<number>) {
        let ww = pos[0] - (this.width / 2 + 20);
        let hh = pos[1] - (this.height / 2 + 80);
        if ((ww > 0 && ww < 60) && (hh > 0 && hh < 30)) {
            this.router.navigate(['../game']);
        }
    }

    private inter(pos: Array<number>) {
        let ww = pos[0] - (this.width - 80);
        let hh = pos[1] - (this.height - 40);
        if ((ww > 0 && ww < 80) && (hh > 0 && hh < 30)) {
            this.keyInter = !this.keyInter;
            if (this.keyWord == "开") {
                this.keyWord = "关";
            }
            else {
                this.keyWord = "开";
            }
        }
    }
    
    
    //屏键控制飞船部份
    private shipleft(pos: Array<number>) {
        let ww = pos[0] - (this.width - 80);
        let hh = pos[1] - (this.height / 2 - 60);
        if ((ww > 0 && ww < 40) && (hh > 0 && hh < 30)) {
            if(!this.sleft){
                this.my_ship.decrement_angle_vel();
                if(!this.sright){
                    this.sleft = true;
                }
                else{
                    this.sright = false;
                }
            }
            else{
                 this.my_ship.increment_angle_vel();
                 this.sleft = false;
            }
        }
    }

    private shipright(pos: Array<number>) {
        let ww = pos[0] - (this.width - 80);
        let hh = pos[1] - (this.height / 2 + 60);
        if ((ww > 0 && ww < 40) && (hh > 0 && hh < 30)) {
            if(!this.sright){
                this.my_ship.increment_angle_vel();
                if(!this.sleft){
                    this.sright = true;
                }
                else{
                    this.sleft = false;
                }
            }
            else{
                this.my_ship.decrement_angle_vel();
                this.sright = false;
            }
        }
    }

    private shipfront(pos: Array<number>) {
        let ww = pos[0] - (this.width - 120);
        let hh = pos[1] - (this.height / 2);
        if ((ww > 0 && ww < 40) && (hh > 0 && hh < 30)) {
            this.my_ship.set_thrust(true);
        }
    }
    private shipstop(pos: Array<number>) {
        let ww = pos[0] - (this.width - 40);
        let hh = pos[1] - (this.height / 2);
        if ((ww > 0 && ww < 40) && (hh > 0 && hh < 30)) {
            this.my_ship.set_thrust(false);
        }
    }

    private shipshoot(pos: Array<number>) {
        let ww = pos[0] - (40);
        let hh = pos[1] - (this.height / 2 - 40);
        if ((ww > 0 && ww < 40) && (hh > 0 && hh < 80)) {
            this.my_ship.shoot((missile_pos: Array<number>, missile_vel: Array<number>, angle: number) => {
                missile_vel = [missile_vel[0]*this.width/1600, missile_vel[1]*this.width / 1600];
                if (this.missile_group.length < 3) {
                    var a_missile = new Sprite(missile_pos, missile_vel, angle, 0, this.images.shot2, this.imagesInfo.shot2, this.sounds.missile);
                    this.missile_group.push(a_missile);
                }
            });
        }
    }
}