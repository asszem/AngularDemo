import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BootstrapSamplesComponent } from './bootstrap-samples/bootstrap-samples.component';
import { ButtonsComponent } from './bootstrap-samples/buttons/buttons.component';
import { NavbarsComponent } from './bootstrap-samples/navbars/navbars.component';
import { LayoutsComponent } from './bootstrap-samples/layouts/layouts.component';
import { AppRoutingModule } from './/app-routing.module';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    BootstrapSamplesComponent,
    ButtonsComponent,
    NavbarsComponent,
    LayoutsComponent,
    TodolistComponent
  ],
  imports: [
    NgbModule.forRoot(), // ng-bootstrap module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
