import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment.development';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-full-screen-map-page',
  imports: [],
  // template: `<div #map></div>`,
  templateUrl: './full-screen-map-page.component.html',
  styles: `
    div{
      width: 100vw;
      height: calc( 100vh - 64px);
    }
  `
})
export class FullScreenMapPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  
  async ngAfterViewInit() {

    if (!this.divElement()?.nativeElement) return;
    const element = this.divElement()?.nativeElement;
    console.log({element});

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-100.3157623, 20.5648449], // starting position [lng, lat]
      zoom: 20, // starting zoom
    });
    // 20.5648449,-100.3157623
    // 20.5853754,-100.365322
  }


}
