import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BootstrapSamplesComponent } from './bootstrap-samples/bootstrap-samples.component';
import { ButtonsComponent } from './bootstrap-samples/buttons/buttons.component';
import { NavbarsComponent } from './bootstrap-samples/navbars/navbars.component';
import { LayoutsComponent } from './bootstrap-samples/layouts/layouts.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    BootstrapSamplesComponent,
    ButtonsComponent,
    NavbarsComponent,
    LayoutsComponent
  ],
  imports: [
    NgbModule.forRoot(), // ng-bootstrap module
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
