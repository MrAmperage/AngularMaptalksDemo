import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularMaptalksModule } from 'angular-maptalks';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularMaptalksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
