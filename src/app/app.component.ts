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
    this.MapService.SetConfiguration({ Center: [86.7, 55.14], Zoom: 19 });
  }
}
