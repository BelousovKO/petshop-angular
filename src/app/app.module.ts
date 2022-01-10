import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ControlsModule} from '../modules/controls/controls.module';
import {LoginModule} from '../modules/login/login.module';
import {CatalogModule} from '../modules/catalog/catalog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ControlsModule,
    LoginModule,
    CatalogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
