import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContainerComponent } from './pages/list-container/list-container.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
    { path: '', component: ListContainerComponent },
    { path: 'detail', component: DetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
