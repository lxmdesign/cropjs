import DrawerLayer from './drawerLayer'
import { ICropOption, Rect } from './types'

export default class CropperBorder extends DrawerLayer {
    private dom: HTMLCanvasElement
    private drawer: DrawerLayer
    private rect: Rect

    constructor(canvas, options: ICropOption) {
        super(canvas)
        this.drawBorder(options)
    }
    public getRect() {
        return this.rect
    }
    private drawBorder(opts: ICropOption) {
        this.ctx.fillStyle = "#1a1a1bc2";
        this.ctx.fillRect(0, 0, this.clientWidth, this.clientHeight);
        const w = this.clientWidth * opts.size;
        const h = w / opts.border
        const x = this.clientWidth * opts.left - w / 2
        const y = this.clientHeight * opts.top - h / 2
        this.rect = [x, y, w, h]
        this.ctx.clearRect(x, y, w, h)
    }
}