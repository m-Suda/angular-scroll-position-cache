import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
    public storeName: string;
    constructor(private store: StoreService) {}

    ngOnInit(): void {
        this.storeName = this.store.cache;
    }
}
