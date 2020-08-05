import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from '../pages/landing-page/landing-page.component';
import { SidePageComponent } from '../pages/side-page/side-page.component';

const materialModules = [MatGridListModule];

@NgModule({
  declarations: [AppComponent, LandingPageComponent, SidePageComponent],
  imports: [BrowserModule, AppRoutingModule, ...materialModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
