import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './user/user-container/user-container.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserSingleComponent } from './user/user-single/user-single.component';
import { OrderContainerComponent } from './order/order-container/order-container.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderSingleComponent } from './order/order-single/order-single.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
