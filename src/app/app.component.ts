import { Component, OnInit } from '@angular/core';
import { MapService } from 'angular-maptalks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private MapService: MapService) {}
  ngOnInit(): void {
    this.MapService.SetConfiguration({
      Zoom: 19,
      Center: [55.14, 86.07],
      BaseTileLayerUrlTemplate:
        'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    });
    console.log(this.MapService);
  }
}
