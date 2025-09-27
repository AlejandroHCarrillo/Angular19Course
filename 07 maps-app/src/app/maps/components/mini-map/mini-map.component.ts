import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.component.html',
  styleUrls: [ './mini-map.component.css']
})
export class MiniMapComponent {
  coords = input.required<LngLatLike>();
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map|null>(null);
  zoom = input<number>(15);

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;    
    
    await new Promise((resolve)=> setTimeout(resolve, 180));
    
    const element = this.divElement()?.nativeElement;

    console.log('Cords: ', this.coords());

    // Creamos la instancia del mapa que vamos a trabajar
    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.coords(), // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
      interactive: false,
    });
    // console.log(map);
    const marker = new mapboxgl.Marker({ 
                  draggable:false,
                  color: 'red',
          })
          .setLngLat(this.coords())
          .addTo(map);
    
    this.map.set(map);
    // this.mapListeners(map);
  }

}
