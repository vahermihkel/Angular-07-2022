import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 58.7359, 24.7732 ],
      zoom: 7
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker = L.marker([59.4227, 24.7934]);
    marker.bindPopup("Ülemiste keskus<br>Avatud 9-22");
    const marker2 = L.marker([58.3779, 26.7308]);
    marker2.bindPopup("Tasku keskus<br>Avatud 8-22");
        
    marker.addTo(this.map);
    marker2.addTo(this.map);
  }

  constructor() { } // <- failide ühendamiseks

  ngOnInit(): void { // <- läheb käima alati enne HTMLi
  }

  ngAfterViewInit(): void {  // <- läheb käima vahetult pärast HTMLi
    this.initMap();
  } 

  onZoom() {
    this.map.setView(L.latLng([58.7359, 24.7732]),7);
  }

  onZoomYlemiste() {
    this.map.setView(L.latLng([59.4227, 24.7934]),12);
  }

  onZoomTasku() {
    this.map.setView(L.latLng([58.3779, 26.7308]),12);
  }

}
