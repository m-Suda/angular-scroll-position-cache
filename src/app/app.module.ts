import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ListContainerComponent } from './pages/list-container/list-container.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { H2Component } from './pages/list-container/components/h2/h2.component';
import { StoreComponent } from './pages/list-container/components/store/store.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IsOpenedPipe } from './pages/list-container/pipes/is-opened.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ListContainerComponent,
        DetailComponent,
        H2Component,
        StoreComponent,
        IsOpenedPipe,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        MatExpansionModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
