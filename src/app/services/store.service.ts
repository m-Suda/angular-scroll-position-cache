import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StoreService {
    public cache: string;
    private _cacheOpenedCategories: string[] = [];

    constructor() {}

    /**
     * そのカテゴリは開かれているものである
     * @param category
     */
    public isOpenedCategories(category: string): boolean {
        return this._cacheOpenedCategories.includes(category);
    }

    /**
     * 開いたカテゴリをcacheする
     * @param openedCategory
     */
    public cacheOpenedCategory(openedCategory: string): void {
        this._cacheOpenedCategories = [...this._cacheOpenedCategories, openedCategory];
    }

    /**
     * 閉じたカテゴリをcacheから削除する
     * @param removeCategory
     */
    public removeClosedCategoryFromCategoryCache(removeCategory: string): void {
        this._cacheOpenedCategories = this._cacheOpenedCategories.filter(
            (c) => c !== removeCategory
        );
    }
}
