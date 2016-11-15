var simpleGui = null;
var draw = null;
export default simpleGui = {
    canvas: undefined,
    canvasContext: undefined,
    draw: undefined,
    update: undefined,

    //creat timer obj, parn: how time doing one, callfun to do fun.
    createTimer: function(time, callfun) {
        var Timer = function() {
            this.time = time;
            this.callfun = callfun;
        }

        Timer.prototype = {
            constructor: Timer,
            start: function() {
                this.callfun();
                setTimeout(this.start.bind(this), this.time);
            },
        }
        return new Timer();
    },

    //构建框架，1秒刷新60次
    createFrame: function(canvass) {
        //游戏框架对象
        var Frame = function() {
            simpleGui.canvas = canvass;
            simpleGui.canvasContext = simpleGui.canvas.getContext("2d");

            this.flag = false;
        }

        Frame.prototype = {
                constructor: Frame,
                //设置背景色和背景图
                setCanvasBackground: function(color, img) {
                    simpleGui.canvas.style.backgroundColor = color || 'rgb(0,0,0)';
                    simpleGui.canvas.style.backgroundImage = img;
                },

                setClickHandle: function(click) {
                    simpleGui.canvas.onclick = function(event) {
                        var lwidth = parseInt(this.style.borderLeftWidth) || 0;
                        var twidth = parseInt(this.style.borderTopWidth) || 0;
                        var cx = event.clientX - this.getBoundingClientRect().left - lwidth;
                        var cy = event.clientY - this.getBoundingClientRect().top - twidth;
                        click([cx, cy]);
                    }
                },

                setKeyupHandle: function(keyup) {
                    document.onkeyup = function(event) {
                        if (event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
                            event.preventDefault();
                        }

                        keyup(event.keyCode);

                        //if(event.keyCode == 37 || event.keyCode == 39)
                        //						this.flag = false;
                    }

                },

                setKeydownHandle: function(keydown) {
                    document.onkeydown = function(event) {
                        if (event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
                            event.preventDefault();
                        }

                        keydown(event.keyCode);

                        //if(event.keyCode == 37 || event.keyCode == 39 )
                        //						this.flag = true;
                    }
                },

                setDrawHandle: function(fdraw) {
                    draw = fdraw;
                },

                start: function() {
                    simpleGui.mainLoop();
                }
            }
            //返回这个对象
        return new Frame();
    },

    //框架画布循环，1秒刷新60次
    mainLoop: function() {
        simpleGui.canvasContext.clearRect(0, 0, simpleGui.canvas.width, simpleGui.canvas.height);
        draw(simpleGui.canvasin);
        window.setTimeout(simpleGui.mainLoop, 1000 / 60);

    },

    //提前加载图片
    loadImage: function(url) {
        var img = new Image();
        img.src = url;
        return img;
    },

    //加载声音
    loadAudio: function(url) {
        var aduio = new Audio();
        aduio.src = url;
        return aduio;
    },

    //画的对象
    canvasin: {
        drawText: function(text, pos, size, color) {
            simpleGui.canvasContext.font = size + "px 宋体";
            simpleGui.canvasContext.fillStyle = color;
            simpleGui.canvasContext.fillText(text, pos[0], pos[1])
        },

        drawImage: function(img, scenter, ssize, pcenter, psize, angle) {
            var ang = angle || 0
            var imgg = new Image();
            imgg.src = img.src;
            var sx = scenter[0] - ssize[0] / 2
            var sy = scenter[1] - ssize[1] / 2
            var dx = pcenter[0] - scenter[0] % ssize[0] - (psize[0] - ssize[0]) / 2;
            var dy = pcenter[1] - scenter[1] % ssize[1] - (psize[1] - ssize[1]) / 2;
            simpleGui.canvasContext.save();
            simpleGui.canvasContext.translate(pcenter[0], pcenter[1]);
            simpleGui.canvasContext.rotate(ang);
            simpleGui.canvasContext.translate(-pcenter[0], -pcenter[1]);
            simpleGui.canvasContext.drawImage(imgg, sx, sy, ssize[0], ssize[1], dx, dy, psize[0], psize[1]);
            simpleGui.canvasContext.restore();
        },
    },

    //键值映射。
    KEY_MAP: {
        left: 37,
        up: 38,
        right: 39,
        space: 32,
    },
}
