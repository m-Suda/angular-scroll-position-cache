import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class ScrollerService {
    private _cachePosition: [number, number];

    constructor(private viewportScroller: ViewportScroller) {}

    /**
     * 現在の位置の座標を取得する
     */
    public get position() {
        return this.viewportScroller.getScrollPosition();
    }

    /**
     * 座標を保持する
     * @param cachePosition
     */
    public set cachePosition(cachePosition: [number, number]) {
        this._cachePosition = cachePosition;
    }

    /**
     * 保持した座標の位置までスクロールする
     */
    public scrollToCachedPosition() {
        if (!this._cachePosition || !this._cachePosition.length) return;
        this.viewportScroller.scrollToPosition(this._cachePosition);
    }
}
