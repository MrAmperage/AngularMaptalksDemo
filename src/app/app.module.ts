import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularMaptalksModule, MapService } from 'angular-maptalks';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularMaptalksModule],
  providers: [MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
