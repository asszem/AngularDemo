// source: https://medium.com/@beeman/tutorial-styling-angular-cli-v6-apps-with-bootstrap-8d4f8ea5adae
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]  // To use the <app-layout> tag outside of the UiModule we need to export it so it can be used in AppComponent
})
export class UiModule { }
