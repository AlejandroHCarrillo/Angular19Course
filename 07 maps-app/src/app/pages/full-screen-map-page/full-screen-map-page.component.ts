import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment.development';
import { DecimalPipe, JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-full-screen-map-page',
  imports: [DecimalPipe, JsonPipe],
  templateUrl: './full-screen-map-page.component.html',
  styles: `
    div{
      width: 100vw;
      height: calc( 100vh - 64px);
    }

    #controls{
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
      border: 1px solid #e2e8f0;
      width: 250px;
    }
  `
})
export class FullScreenMapPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map|null>(null);
  zoom = signal(10);
  coordinates = signal({
    lng: 20.5648449,
    lat: -100.3157623
  });
  
  zoomEffect = effect(()=>{
    if(!this.map()) return;
    // console.log("Aqui deberia de poner el zoom a ", this.zoom());
    this.map()?.setZoom(this.zoom());
  });

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve)=> setTimeout(resolve, 180));

    const element = this.divElement()?.nativeElement;
    // console.log({element});
    const {lat, lng } = this.coordinates();

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [lat, lng], // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
    });
    // 20.5648449, -100.3157623
    // 20.5853754, -100.365322
    this.mapListeners(map);
  }
  
  mapListeners(map: mapboxgl.Map ){
    // Este metodo es para sincronizar el zoom del mapa con el de la señal
    // por si movemos el zoom con la rueda del mouse se actualice la señal
    map.on('zoomend', (event) => {
      // usando el evento para obtener el zoom
      const newZoom = event.target.getZoom();
      this.zoom.set(newZoom);
    })

    map.on('moveend', () => {
      // usando el map para obtener el centro
      const center = map.getCenter();
      this.coordinates.set(center)
    });

    map.on('load', ()=> {
      console.log('Map loaded');
    });

    map.addControl( new mapboxgl.FullscreenControl());
    map.addControl( new mapboxgl.NavigationControl());
    map.addControl( new mapboxgl.ScaleControl());
    map.addControl( new mapboxgl.GeolocateControl());


    this.map.set(map);
  }
}
