import { AfterViewInit, Component, OnInit } from '@angular/core';
import { STORE_LIST } from './store-list';
import { Router } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { ScrollerService } from '../../services/scroller.service';

@Component({
    selector: 'app-list-container',
    templateUrl: './list-container.component.html',
    styleUrls: ['./list-container.component.css'],
})
export class ListContainerComponent implements OnInit, AfterViewInit {
    public stores = STORE_LIST;

    constructor(
        private router: Router,
        private store: StoreService,
        private scroller: ScrollerService
    ) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        // this.scroller.scrollToCachedAnchor();
        this.scroller.scrollToCachedPosition();
    }

    public onClick(store: { name: string; id: number }): void {
        this.store.cache = store.name;
        // this.scroller.cacheAnchor = `${store.id}`;
        this.scroller.cachePosition = this.scroller.position;
        this.router.navigate(['detail']).then();
    }

    /**
     * 開かれたカテゴリをキャッシュする
     * @param openedCategory
     */
    public cacheOpenedCategory(openedCategory: string) {
        this.store.cacheOpenedCategory(openedCategory);
    }

    /**
     * 閉じたカテゴリをキャッシュから削除する
     * @param closedCategory
     */
    public removeClosedCategoryFromCategoryCache(closedCategory: string) {
        this.store.removeClosedCategoryFromCategoryCache(closedCategory);
    }
}
