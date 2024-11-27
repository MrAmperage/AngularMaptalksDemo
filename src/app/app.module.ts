import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularMaptalksModule, MapService } from 'angular-maptalks';
import { AngularMaptalksToolbarPluginModule } from 'angular-maptalks-toolbar-plugin';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularMaptalksModule,
    AngularMaptalksToolbarPluginModule,
  ],
  providers: [MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
