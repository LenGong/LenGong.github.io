import simpleGui from './simplegui';
//global var
var WIDTH = 800;
var HEIGHT = 600;
var score = 0;
var lives = 3;
var time = 0;
var started = false;
var flag = false;
export var init_ship = 1;

//default value
var rock_pos = null;
var  rock_vel = null;
var rock_avel = null;

//image's patch
var debris2_blue = require("../res/img/debris2_blue.png");
var splash = require("../res/img/splash.png");
var double_ship = require("../res/img/double_ship.png");
var shot2 = require("../res/img/shot2.png");
var asteroid_blue = require("../res/img/asteroid_blue.png");
var explosion_alpha = require("../res/img/explosion_alpha.png");

//audio's patch
var track = require("../res/sound/soundtrack.mp3");
var missile = require("../res/sound/missile.mp3");
var thrust = require("../res/sound/thrust.mp3");
var explosion = require("../res/sound/explosion.mp3");

function imageInfo(center, size, radius, lifespan, animated) {
    this.center = center;
    this.size = size;
    this.radius = radius || 0;
    this.lifespan = lifespan || false;
    this.animated = animated || false;

    if (typeof this.getCenter != "function") {
        imageInfo.prototype.getCenter = function() {
            return this.center;
        };
        imageInfo.prototype.getSize = function() {
            return this.size;
        };
        imageInfo.prototype.getRadius = function() {
            return this.radius;
        };
        imageInfo.prototype.getLifespan = function() {
            return this.lifespan;
        };
        imageInfo.prototype.getAnimated = function() {
            return this.animated;
        };
    }
}

// debris2_blue image
var debris_info = new imageInfo([320, 240], [640, 480]);
var debris_image = simpleGui.loadImage(debris2_blue);
// splash image
var splash_info = new imageInfo([200, 150], [400, 300]);
var splash_image = simpleGui.loadImage(splash);
//// ship image
var ship_info = new imageInfo([45, 45], [90, 90], 35);
var ship_image = simpleGui.loadImage(double_ship);
//
// missile image - shot1.png, shot2.png, shot3.png
var missile_info = new imageInfo([5, 5], [10, 10], 3, 60);
var missile_image = simpleGui.loadImage(shot2);

// asteroid images - asteroid_blue.png, asteroid_brown.png, asteroid_blend.png
var asteroid_info = new imageInfo([45, 45], [90, 90], 40);
var asteroid_image = simpleGui.loadImage(asteroid_blue);

// animated explosion - explosion_orange.png, explosion_blue.png, explosion_blue2.png, explosion_alpha.png
var explosion_info = new imageInfo([64, 64], [128, 128], 17, 24, true);
var explosion_image = simpleGui.loadImage(explosion_alpha);

// sound assets purchased from sounddogs.com, please do not redistribute
// .ogg versions of sounds are also available, just replace .mp3 by .ogg
var soundtrack = simpleGui.loadAudio(track);
soundtrack.loop = true;
soundtrack.volume = 0.8;
var missile_sound = simpleGui.loadAudio(missile);
var ship_thrust_sound = simpleGui.loadAudio(thrust);
ship_thrust_sound.loop = true;
var explosion_sound = simpleGui.loadAudio(explosion);


//helper functions to handle transformations
function angle_to_vector(ang) {
    return [Math.cos(ang), Math.sin(ang)];
}

function dist(p, q) {
    return Math.sqrt((p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]));
}
var mark = false;

//key handlers to control ship
export function keydown(key) {
    if (key == simpleGui.KEY_MAP['left'] && !mark) {
        my_ship.decrement_angle_vel();
        mark = true;
    } else if (key == simpleGui.KEY_MAP['right'] && !mark) {
        my_ship.increment_angle_vel();
        mark = true;
    } else if (key == simpleGui.KEY_MAP['up']) {
        my_ship.set_thrust(true);
    } else if (key == simpleGui.KEY_MAP['space']) {
        my_ship.shoot();
    }
}

export function keyup(key) {
    if (key == simpleGui.KEY_MAP['left'] && mark) {
        my_ship.increment_angle_vel();
        mark = false;
    } else if (key == simpleGui.KEY_MAP['right'] && mark) {
        my_ship.decrement_angle_vel();
        mark = false;
    } else if (key == simpleGui.KEY_MAP['up']) {
        my_ship.set_thrust(false);
    }
}

export function click(pos) {
    var center = [WIDTH / 2, HEIGHT / 2];
    var size = splash_info.getSize();
    var inwidth = false;
    var inheight = false;
    if ((center[0] - size[0] / 2) < pos[0] && pos[0] < (center[0] + size[0] / 2)) {
        inwidth = true;
    }
    if ((center[1] - size[1] / 2) < pos[0] && pos[0] < (center[0] + size[0] / 2)) {
        inheight = true;
    }
    if (!started && inwidth && inheight) {
        started = true;
    }
    soundtrack.play();
}

// Ship class
function Ship(pos, vel, angle, image, info) {
    this.pos = [pos[0], pos[1]];
    this.vel = [vel[0], vel[1]];
    this.thrust = false;
    this.angle = angle;
    this.angle_vel = 0;
    this.image = image;
    this.image_center = info.getCenter();
    this.image_size = info.getSize();
    this.radius = info.getRadius();

    if (typeof this.draw != "function") {
        Ship.prototype.draw = function(canvas) {
            if (this.thrust)
                canvas.drawImage(this.image, [this.image_center[0] + this.image_size[0],
                        this.image_center[1]
                    ], this.image_size,
                    this.pos, this.image_size, this.angle)
            else
                canvas.drawImage(this.image, this.image_center, this.image_size,
                    this.pos, this.image_size, this.angle)
                // canvas.draw_circle(self.pos, self.radius, 1, "White", "White")
        }

        Ship.prototype.update = function() {
            //update angle
            this.angle += this.angle_vel;

            // update position
            this.pos[0] = (this.pos[0] + this.vel[0]) % WIDTH;
            this.pos[1] = (this.pos[1] + this.vel[1]) % HEIGHT;
            if (this.pos[0] < 0)
                this.pos[0] = WIDTH;
            if (this.pos[1] < 0)
                this.pos[1] = HEIGHT;

            // update velocity
            if (this.thrust) {
                var acc = angle_to_vector(this.angle);
                this.vel[0] += acc[0] * 0.1;
                this.vel[1] += acc[1] * 0.1;
            }

            this.vel[0] *= 0.99;
            this.vel[1] *= 0.99;
        }

        Ship.prototype.set_thrust = function(on) {
            this.thrust = on;
            if (on) {
                ship_thrust_sound.play();
            } else {
                ship_thrust_sound.pause();
            }
        }

        Ship.prototype.increment_angle_vel = function() {
            this.angle_vel += 0.1;
        }

        Ship.prototype.decrement_angle_vel = function() {
            this.angle_vel -= 0.1;
        }

        Ship.prototype.shoot = function() {
            var forward = angle_to_vector(this.angle);
            var missile_pos = [this.pos[0] + this.radius * forward[0], this.pos[1] +
                this.radius * forward[1]
            ];
            var missile_vel = [this.vel[0] + 6 * forward[0], this.vel[1] + 6 * forward[1]];

            if (missile_group.length < 3) {
                var a_missile = new Sprite(missile_pos, missile_vel, this.angle, 0, missile_image, missile_info,
                    missile_sound);
                missile_group.push(a_missile);
            }
        }
    }
}

//Sprite class
function Sprite(pos, vel, ang, ang_vel, image, info, sound) {
    this.pos = [pos[0], pos[1]];
    this.vel = [vel[0], vel[1]];
    this.angle = ang;
    this.angle_vel = ang_vel;
    this.image = image;
    this.image_center = info.getCenter();
    this.image_size = info.getSize();
    this.radius = info.getRadius();
    this.lifespan = info.getLifespan();
    this.animated = info.getAnimated();
    this.age = 0;
    if (sound) {
        sound.play();
    }

    if (typeof this.draw != "function") {
        Sprite.prototype.draw = function(canvas) {
            canvas.drawImage(this.image, this.image_center, this.image_size,
                this.pos, this.image_size, this.angle);
        }

        Sprite.prototype.update = function() {
            //update angle
            this.angle += this.angle_vel;

            //update position
            this.pos[0] = (this.pos[0] + this.vel[0]) % WIDTH;
            this.pos[1] = (this.pos[1] + this.vel[1]) % HEIGHT;
            if (this.pos[0] < 0)
                this.pos[0] = WIDTH;
            if (this.pos[1] < 0)
                this.pos[1] = HEIGHT;

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

        Sprite.prototype.collide = function(other_object) {
            var two_distance = dist(this.pos, other_object.pos);
            if (two_distance - this.radius - other_object.radius <= 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}

export function draw(canvas) {
    //animiate background
    time++;
    var wtime = (time / 4) % WIDTH
    var center = debris_info.getCenter()
    var size = debris_info.getSize()
    canvas.drawImage(debris_image, center, size, [wtime - WIDTH / 2, HEIGHT / 2], [WIDTH, HEIGHT])
    canvas.drawImage(debris_image, center, size, [wtime + WIDTH / 2, HEIGHT / 2], [WIDTH, HEIGHT])

    //draw UI
    canvas.drawText("战机", [50, 50], 20, "White");
    canvas.drawText("分数", [680, 50], 20, "White");
    canvas.drawText(lives - 1, [50, 80], 22, "White");
    canvas.drawText(score, [680, 80], 22, "White");

    if (score && !(score % 20) && flag) {
        init_ship++;
        flag = false;
        if (!(score % 100)) {
            lives++;
        }
    }

    for (var i = 0; i < (lives - 1); i++) {
        canvas.drawImage(ship_image, [45, 45], [90, 90], [80 + i * 30, 75], [400 / 10, 300 / 10], -1.57);
    }

    process_sprite_group(canvas, rock_group);
    if (group_collide(my_ship)) {
        lives--;
        my_ship.pos = [WIDTH / 2, HEIGHT / 2];
        my_ship.angle = 3.14;
        my_ship.vel = [0, 0];
    }

    if (!lives) {
        my_ship.pos = [WIDTH / 2, HEIGHT / 2];
        my_ship.angle = 3.14;
        my_ship.vel = [0, 0];
        rock_group.splice(0, rock_group.length);
        missile_group.splice(0, missile_group.length);
        lives = 3;
        soundtrack.pause();
        started = false
        score = 0
        init_ship = 1
    }

    group_group_collide();
    process_sprite_group(canvas, missile_group);
    process_sprite_group(canvas, explosion_group);

    my_ship.draw(canvas);
    my_ship.update();

    //draw splash screen if not started
    if (!started) {
        canvas.drawImage(splash_image, splash_info.getCenter(),
            splash_info.getSize(), [WIDTH / 2, HEIGHT / 2],
            splash_info.getSize());
    }
}

//
function process_sprite_group(canvas, group) {
    for (var i in group) {
        group[i].draw(canvas);
        if (group[i].update()) {
            group.splice(i, 1);
        }
    }
}

function group_collide(other) {
    for (var i in rock_group) {
        if (rock_group[i].collide(other)) {
            explosion_group.push(new Sprite(rock_group[i].pos, [0, 0], 0, 0, explosion_image, explosion_info, explosion_sound));
            rock_group.splice(i, 1);
            return true;
        }
    }
    return false;
}

function group_group_collide() {
    for (var i in missile_group) {
        if (group_collide(missile_group[i])) {
            missile_group.splice(i, 1);
            score += 10;
            flag = true;
        }
    }
}

//timer handler that spawns a rock
export function rock_spawner() {
    if (rock_group.length < init_ship && started) {
        rock_pos = [Math.random() * WIDTH, Math.random() * HEIGHT];
        rock_vel = [Math.random() * .6 * init_ship / 5.0 - .3 * init_ship / 5.0,
            Math.random() * .6 * init_ship / 5.0 - .3 * init_ship / 5.0
        ];
        rock_avel = Math.random() * .2 * init_ship / 10.0 - .1 * init_ship / 10.0;
        rock_group.push(new Sprite(rock_pos, rock_vel, 0, rock_avel, asteroid_image, asteroid_info))
    }
}

export var init_flag = true;
export function stop(){
  lives = 0;
  init_flag = false;
}

var rock_group = [];
var missile_group = [];
var explosion_group = [];
var my_ship = new Ship([WIDTH / 2, HEIGHT / 2], [0, 0], 3.14,
    ship_image, ship_info);
