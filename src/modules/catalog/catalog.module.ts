import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import {RouterModule} from '@angular/router';
import {ControlsModule} from '../controls/controls.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BonusComponent } from './bonus/bonus.component';
import { OrderComponent } from './order/order.component';
import { InBoxComponent } from './in-box/in-box.component';
import { AllItemsComponent } from './all-items/all-items.component';



@NgModule({
  declarations: [
    CatalogComponent,
    HeaderComponent,
    MenuComponent,
    BonusComponent,
    OrderComponent,
    InBoxComponent,
    AllItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ControlsModule
  ]
})
export class CatalogModule { }
