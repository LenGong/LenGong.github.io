+ function(win) {
    'use strict';
    var mouseCircle = {
        stBig: 40,
        bgColor: 'yellow',
        isToRing: '100%',
        initCss: function() {
            var styles = '<style>' +
                '@keyframes anmi {' +
                    '0% {transform: scale(0);'+
                    'box-shadow: 2px 2px 2px #666;' +
                    'opacity:1;' +
                    '}'+
                    '25% {transform: scale(0.6);'+
                    'box-shadow: 4px 4px 2px #EEE;' +
                    'opacity:0.8' +
                    '}'+
                    '50% {transform: scale(0.3);'+
                    'box-shadow: 2px 2px 2px #666;' +
                    'opacity:0.2' +
                    '}'+
                    '75% {transform: scale(0.8);'+
                    'box-shadow: 4px 4px 2px #EEE;' +
                    'opacity:1' +
                    '}'+
                    '100% {transform: scale(1);' +
                    'box-shadow: 2px 2px 2px #666;' +
                    'opacity:0;' +
                    '}'+
                '}' +
                '</style>';
            var hd = win.document.head || win.document.getElementsByTagName('head')[0];
            hd.innerHTML = hd.innerHTML + styles;
        },

        el: function() {
            var div = win.document.createElement('div');
            var bd = win.document.body || win.document.getElementsByTagName('body')[0];
            bd.appendChild(div);
            return div;
        },

        start: function() {
            var big = this.stBig;
            var bgColor = this.bgColor;
            var isToRing = this.isToRing;
            var el = this.el;
            win.document.addEventListener('click', function(event) {
                var elp = el();
                elp.style.position = 'fixed';
                elp.style.left = -big / 2 + event.clientX + 'px';
                elp.style.top = -big / 2 + event.clientY + 'px';
                elp.style.width = big +'px';
                elp.style.height = big + 'px';
                elp.style.backgroundColor = bgColor;
                elp.style.borderRadius = isToRing;
                elp.style.dispaly = 'none';
                elp.style.animation= 'anmi 1s  forwards';
                elp.style.zIndex = 10000;
                setTimeout(function(){
                  elp.parentNode.removeChild(elp);
                },1000);

            }, false);
        }
    };

    win.mouseCircle = mouseCircle;

}(window);

window.addEventListener('load', function() {
    mouseCircle.bgColor = "yellow";
    mouseCircle.stBig = 60;
    mouseCircle.isToRing = '100%';
    mouseCircle.initCss();
    mouseCircle.start();
}, false);
