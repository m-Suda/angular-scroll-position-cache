import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class ScrollerService {
    private _cachePosition: [number, number];
    private _cacheAnchor: string;

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
     * アンカーを保持する
     * @param cacheAnchor
     */
    public set cacheAnchor(cacheAnchor: string) {
        this._cacheAnchor = cacheAnchor;
    }

    /**
     * 保持した座標の位置までスクロールする
     */
    public scrollToCachedPosition() {
        if (!this._cachePosition || !this._cachePosition.length) return;
        this.viewportScroller.scrollToPosition(this._cachePosition);
    }

    /**
     * アンカーの位置までスクロールする
     */
    public scrollToCachedAnchor() {
        if (!this._cacheAnchor) return;
        this.viewportScroller.scrollToAnchor(this._cacheAnchor);
    }
}
