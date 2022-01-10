import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BkoButtonComponent} from "./bko-button/bko-button.component";
import {HeaderSearchComponent} from "./header-search/header-search.component";
import {MenuButtonComponent} from "./menu-button/menu-button.component";



@NgModule({
  declarations: [BkoButtonComponent, HeaderSearchComponent, MenuButtonComponent],
  imports: [
    CommonModule
  ],
  exports :[BkoButtonComponent, HeaderSearchComponent, MenuButtonComponent]
})
export class ControlsModule { }
