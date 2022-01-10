import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../modules/login/login/login.component';
import {CatalogComponent} from '../modules/catalog/catalog/catalog.component';
import {AdminComponent} from '../modules/admin/admin/admin.component';
import {MenuComponent} from "../modules/catalog/menu/menu.component";
import {BonusComponent} from "../modules/catalog/bonus/bonus.component";
import {OrderComponent} from "../modules/catalog/order/order.component";
import {InBoxComponent} from "../modules/catalog/in-box/in-box.component";
import {AllItemsComponent} from "../modules/catalog/all-items/all-items.component";

const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: 'catalog', component: CatalogComponent,
    children: [
      {
        path: '',
        component: AllItemsComponent,
      },
      {
        path: 'menu',
        component: MenuComponent,
        data: {
          title: 'menu',
        }
      },
      {
        path: 'bonus',
        component: BonusComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'inBox',
        component: InBoxComponent,
      },
    ]},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: CatalogComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
