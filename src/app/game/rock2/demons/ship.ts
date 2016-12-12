export class Ship {
    pos: Array<number>;
    vel: Array<number>;
    thrust: boolean;
    angle: number;
    angle_vel: number;
    image: string;
    image_center: Array<number>;
    image_size: Array<number>;
    radius: number;
    ship_thrust_sound: any

    constructor(pos: Array<number>, vel: Array<number>, angle: number, image: string, info: any, sound: any) {
        this.pos = [pos[0], pos[1]];
        this.vel = [vel[0], vel[1]];
        this.thrust = false;
        this.angle = angle;
        this.angle_vel = 0;
        this.image = image;
        this.image_center = info.getCenter();
        this.image_size = info.getSize();
        this.radius = info.getRadius();
        this.ship_thrust_sound = sound;
    }
    
    draw(canvas: any) {
        if (this.thrust)
            canvas.drawImage(this.image, [this.image_center[0] + this.image_size[0],
            this.image_center[1]
            ], this.image_size,
                this.pos, this.image_size, this.angle)
        else
            canvas.drawImage(this.image, this.image_center, this.image_size,
                this.pos, this.image_size, this.angle)
    }

    update(width: number, height: number) {
        //update angle
        this.angle += this.angle_vel;
        // update position
        this.pos[0] = (this.pos[0] + this.vel[0]) % width;
        this.pos[1] = (this.pos[1] + this.vel[1]) % height;
        if (this.pos[0] < 0)
            this.pos[0] = width;
        if (this.pos[1] < 0)
            this.pos[1] = height;
        // update velocity
        if (this.thrust) {
            let acc = this.angle_to_vector(this.angle);
            this.vel[0] += acc[0] * 0.1;
            this.vel[1] += acc[1] * 0.1;
        }
        this.vel[0] *= (0.99 - 10 / width);
        this.vel[1] *= (0.99 - 10 / width);
    }

    set_thrust(on: boolean) {
        this.thrust = on;
        if (on) {
            this.ship_thrust_sound.play();
        } else {
            this.ship_thrust_sound.pause();
        }
    }

    increment_angle_vel() {
        this.angle_vel += 0.04;
    }

    decrement_angle_vel() {
        this.angle_vel -= 0.04;
    }

    shoot(sprite: any) {
        let forward = this.angle_to_vector(this.angle);
        let missile_pos = [this.pos[0] + this.radius * forward[0], this.pos[1] +
            this.radius * forward[1]
        ];
        let missile_vel = [this.vel[0] + 6 * forward[0], this.vel[1] + 6 * forward[1]];
        sprite(missile_pos, missile_vel, this.angle);
    }

    private angle_to_vector(ang: number) {
        return [Math.cos(ang), Math.sin(ang)];
    }
}