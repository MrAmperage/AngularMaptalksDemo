import { Layer, MapTool, ThreeLayer } from 'angular-maptalks';

/*3D инструмент для карты*/
export default class ThreeDimensionPlugin extends MapTool {
  ThreeDimensionLayer!: ThreeLayer;
  override onEnable = () => {
    this.ThreeDimensionLayer = new ThreeLayer('ThreeLayer', {});
    this.getMap().addLayer(this.ThreeDimensionLayer as Layer);
  };

  override onDisable(): void {
    this.getMap().removeLayer(this.ThreeDimensionLayer as Layer);
  }
}
