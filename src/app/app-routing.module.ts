import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { BootstrapSamplesComponent } from './bootstrap-samples/bootstrap-samples.component';
import { ButtonsComponent } from './bootstrap-samples/buttons/buttons.component';
import { LayoutsComponent } from './bootstrap-samples/layouts/layouts.component';
import { NavbarsComponent } from './bootstrap-samples/navbars/navbars.component';
import { TodolistComponent } from './todolist/todolist.component';
import { JavascriptStuffComponent } from './javascript-stuff/javascript-stuff.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'bootstrap-samples', component: BootstrapSamplesComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'layouts', component: LayoutsComponent },
  { path: 'navbars', component: NavbarsComponent },
  { path: 'todolist', component: TodolistComponent},
  { path: 'javascript-stuff', component: JavascriptStuffComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
