export class Sprite {
    private pos: Array<number>;
    private vel: Array<number>;
    private angle: number;
    private angle_vel: any;
    private image: any;
    private image_center: Array<number>;
    private image_size: Array<number>;
    private radius: number;
    private lifespan: number;
    private animated: boolean;
    private age: number;
    //Sprite class
    constructor(pos:Array<number>, vel:Array<number>, ang:number, ang_vel:number, image:any, info:any, sound?:any) {
        this.pos = [pos[0], pos[1]];
        this.vel = [vel[0], vel[1]];
        this.angle = ang;
        this.angle_vel = ang_vel;
        this.image = image;
        this.image_center = info.getCenter();
        this.image_size = info.getSize();
        this.radius = info.getRadius();
        this.lifespan = info.getLifspan();
        this.animated = info.getAnimated();
        this.age = 0;
        if (sound) {
            sound.play();
        }
    }


    draw(canvas:any) {
        canvas.drawImage(this.image, this.image_center, this.image_size,
            this.pos, this.image_size, this.angle);
    }

    update(width:number, height:number) {
        //update angle
        this.angle += this.angle_vel;

        //update position
        this.pos[0] = (this.pos[0] + this.vel[0]) % width;
        this.pos[1] = (this.pos[1] + this.vel[1]) % height;
        if (this.pos[0] < 0)
            this.pos[0] = width;
        if (this.pos[1] < 0)
            this.pos[1] = height;

        if (this.animated) {
            this.image_center[0] += this.age * this.image_size[0];
        }

        this.age += 1;

        if (this.age == this.lifespan) {
            if (this.animated) {
                this.image_center[0] %= this.age * this.image_size[0];
            }
            return true;
        } else {
            return false;
        }
    }

    collide(other_object: any) {
        let two_distance = this.dist(this.pos, other_object.pos);
        if (two_distance - this.radius - other_object.radius <= 0) {
            return true;
        } else {
            return false;
        }
    }


    private dist(p: Array<number>, q: Array<number>) {
        return Math.sqrt((p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]));
    }
}

