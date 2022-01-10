import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BkoButtonComponent} from "./bko-button/bko-button.component";
import {HeaderSearchComponent} from "./header-search/header-search.component";
import {MenuButtonComponent} from "./menu-button/menu-button.component";
import { BkoPasswordComponent } from './bko-password/bko-password.component';
import {ReactiveFormsModule} from "@angular/forms";

const COMPONENTS = [BkoButtonComponent, HeaderSearchComponent, MenuButtonComponent, BkoPasswordComponent]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports :COMPONENTS
})
export class ControlsModule { }
