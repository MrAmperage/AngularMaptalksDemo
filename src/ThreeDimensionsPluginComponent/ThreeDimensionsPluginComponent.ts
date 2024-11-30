import { Component } from '@angular/core';
import { AngularMaptalksBasePluginComponent } from 'angular-maptalks';
import { PluginType } from 'angular-maptalks/lib/Modules/AngularMaptalksPluginModule/Components/AngularMaptalksBasePluginComponent/AngularMaptalksBasePluginComponentType';
@Component({
  selector: 'ThreeDimensionsPluginComponent',
  templateUrl: './ThreeDimensionsPluginComponent.html',
})
export default class ThreeDimensionsPluginComponent extends AngularMaptalksBasePluginComponent {
  override Type: PluginType = 'Button';

  override get GetIcon(): any {
    return;
  }

  override InitPlugin() {}
}
