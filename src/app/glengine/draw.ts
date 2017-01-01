import { Injectable } from '@angular/core';

@Injectable()
export class Draw {
    public glCanvas: any;

    constructor (){}

    setglCanvas(glCanvas: any){
        this.glCanvas = glCanvas;
    }

    drawRect(pos: Array<number>, hw:Array<number>, color:string){
         this.glCanvas.strokeStyle = color;
         this.glCanvas.strokeRect(pos[0], pos[1], hw[0], hw[1]);
    }

    drawText(text:string, pos:Array<number>, size:number, color:string) {
        this.glCanvas.font = size + "px 宋体";
        this.glCanvas.fillStyle = color;
        this.glCanvas.fillText(text, pos[0], pos[1])
    }
    /**
     * glCanvas
     * 
     * @param {*} img 载入的图片对象
     * @param {Array<number>} scenter 源图片的中心点
     * @param {Array<number>} ssize  源图片尺寸
     * @param {Array<number>} pcenter canvas中心
     * @param {Array<number>} psize  显示大小
     * @param {number} [angle=0]  图片角度
     * 
     * @memberOf Draw
     */
    drawImage(img: any, scenter: Array<number>, ssize: Array<number>, pcenter: Array<number>, psize: Array<number>, angle=0) {
        let sx = scenter[0] - ssize[0] / 2
        let sy = scenter[1] - ssize[1] / 2
        let dx = pcenter[0] - scenter[0] % ssize[0]- (psize[0] - ssize[0]) / 2;
        let dy = pcenter[1] - scenter[1] % ssize[1]- (psize[1] - ssize[1]) / 2;
        this.glCanvas.save();
        this.glCanvas.translate(pcenter[0], pcenter[1]);
        this.glCanvas.rotate(angle);
        this.glCanvas.translate(-pcenter[0], -pcenter[1]);
        this.glCanvas.drawImage(img, sx, sy, ssize[0], ssize[1], dx, dy, psize[0], psize[1]);
        this.glCanvas.restore();
    }
}