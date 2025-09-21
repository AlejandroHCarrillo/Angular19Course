import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment';
import { v4 as UUIDV4 } from 'uuid';
import { JsonPipe } from '@angular/common';

// Configuramos la llave de mapbox

mapboxgl.accessToken = environment.mapboxKey;

interface Marker{
  // Creamos esta interfaz para almacenar los markers
  id:string;
  mapboxMarker: mapboxgl.Marker;
}

@Component({
  selector: 'app-markers-page',
  imports: [JsonPipe],
  templateUrl: './markers-page.component.html',
  styles: ``
})
export class MarkersPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map|null>(null);

  markers = signal<Marker[]>([]);

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve)=> setTimeout(resolve, 180));

    const element = this.divElement()?.nativeElement;

    // Creamos la instancia del mapa que vamos a trabajar
    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-100.3157623, 20.5648449], // starting position [lng, lat]
      zoom: 15, // starting zoom
    });

    // const marker = new mapboxgl.Marker({ 
    //                       draggable:true,
    //                       color: 'red',
    //               })
    //               .setLngLat([-100.3157623, 20.5648449])
    //               .addTo(map);
    // // 20.5648449, -100.3157623
    // // 20.5853754, -100.365322
    // marker.on('dragged', (event)=>{
    //   console.log('draged: ', event);      
    // });

    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map ){
      map.on('click', (event) => this.mapClick(event));
      this.map.set(map);
  }

  mapClick(event: mapboxgl.MapMouseEvent){
    if(!this.map()) return;   // Si no existe el mapa no hace nada
    const map = this.map()!;  // Bajamos el map general a una constante local
    // estas son las coordenadas para nuestro marcador
    // console.log(event.lngLat);
    const coords = event.lngLat;
    const rndColor = '#xxxxxx'
                  .replace(/x/g, (y) =>
                    ((Math.random() * 16) | 0).toString(16)
                  );

    const newMarker = new mapboxgl.Marker({ 
                      draggable:true,
                      color: rndColor,
              })
              .setLngLat(coords)
              .addTo(map);
    // console.log(`Hay ${this.markers()?.length} Merkers.`);
    // console.log(`Estos son los ${this.markers()} Merkers.`);

    const myMarker : Marker = {
      id: UUIDV4(),
      mapboxMarker: newMarker
    }

    // if(this.markers() === undefined || this.markers() === null ) this.markers.set([myMarker]);
    // else 
      this.markers.update((currList) => [myMarker, ...currList] );
    console.log("Los Markers", this.markers());
  }

  flyToMarker(lngLat: LngLatLike){
    if(!this.map()) return;
    this.map()?.flyTo({center: lngLat});
  }

  deleteMarker(marker: Marker){
    if(!this.map()) return;
    const map = this.map()!;  // Bajamos el map general a una constante local

    marker.mapboxMarker.remove();

    this.markers.set(this.markers().filter(m => m.id !== marker.id));

  }
}
