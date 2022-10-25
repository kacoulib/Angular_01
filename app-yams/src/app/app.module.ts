import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';

@NgModule({
  declarations: [AppComponent, PastriesComponent, PastrieDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
