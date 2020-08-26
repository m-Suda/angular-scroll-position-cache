import { Pipe, PipeTransform } from '@angular/core';
import { StoreService } from '../../../services/store.service';

@Pipe({
    name: 'isOpened',
})
export class IsOpenedPipe implements PipeTransform {
    constructor(private store: StoreService) {}

    transform(value: string): boolean {
        return this.store.isOpenedCategories(value);
    }
}
