import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EasyDonateFooterComponent } from './components/easy-donate-footer/easy-donate-footer.component';
import { EasyDonateHeaderComponent } from './components/easy-donate-header/easy-donate-header.component';

@NgModule({
  declarations: [
    AppComponent,
    EasyDonateFooterComponent,
    EasyDonateHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
