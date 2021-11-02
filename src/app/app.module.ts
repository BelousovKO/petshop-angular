import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BkoButtonComponent } from './controls/bko-button/bko-button.component';
import { MenuButtonComponent } from './controls/menu-button/menu-button.component';
import { HeaderSearchComponent } from './controls/header-search/header-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BkoButtonComponent,
    MenuButtonComponent,
    HeaderSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
