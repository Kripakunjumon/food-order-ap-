import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StarRatingModule } from 'angular-star-rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, StarRatingModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
