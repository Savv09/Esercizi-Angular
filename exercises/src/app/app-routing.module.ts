import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderContainerComponent } from "./order/order-container/order-container.component";
import { UserContainerComponent } from "./user/user-container/user-container.component";

const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full'},
    { path: 'users', component: UserContainerComponent},
    { path: 'orders', component: OrderContainerComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};