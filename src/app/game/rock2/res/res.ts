class ImgInfo {
      center: Array<number>;
      size: Array<number>;
      radius: number;
      lifespan: number;
      animated: boolean;
      /**
       * Creates an instance of ImgInfo.
       * 
       * @param {Array<number>} center 中心坐标
       * @param {Array<number>} size  尺寸
       * @param {number} [radius=0]    生命周期
       * @param {number} [lifespan=0]  循环圈
       * @param {boolean} [animated=false] 动画
       * 
       * @memberOf ImgInfo
       */
      constructor(center: Array<number>, size: Array<number>, radius = 0, lifespan = 0, animated = false) {
            this.center = center;
            this.size = size;
            this.radius = radius;
            this.lifespan = lifespan;
            this.animated = animated;
      }

      getCenter(){ return this.center}
      getSize(){ return this.size}
      getRadius(){ return this.radius}
      getLifspan(){ return this.lifespan}
      getAnimated(){ return this.animated}
}

export const images = [
      {
            asteroidBlue: require("./img/asteroid_blue.png"),
            debris2Blue: require('./img/debris2_blue.png'),
            doubleShip: require('./img/double_ship.png'),
            explosionAlpha: require('./img/explosion_alpha.png'),
            nebulaBluef: require('./img/nebula_bluef.png'),
            shot2: require('./img/shot2.png'),
            splash: require('./img/splash.png')
      },
      {
            asteroidBlue: new ImgInfo([45, 45], [90, 90], 40),
            debris2Blue: new ImgInfo([320, 240], [640, 480]),
            doubleShip: new ImgInfo([45, 45], [90, 90], 35),
            explosionAlpha: new ImgInfo([64, 64], [128, 128], 17, 24, true),
            shot2: new ImgInfo([5, 5], [10, 10], 3, 120),
            splash: new ImgInfo([200, 150], [400, 300])
      }
]

export const sounds = {
      explosion: require('./sound/explosion.mp3'),
      missile: require('./sound/missile.mp3'),
      soundtrack: require('./sound/soundtrack.mp3'),
      thrust: require('./sound/thrust.mp3')
}


