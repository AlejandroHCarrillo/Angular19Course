import { Component, signal } from '@angular/core';
import { HouseProperty } from '../../interfaces/property-house.interface';
import { propertyhouses } from '../../data/properties.data';
import { MiniMapComponent } from "../../maps/components/mini-map/mini-map.component";


@Component({
  selector: 'app-houses-page',
  imports: [MiniMapComponent],
  templateUrl: './houses-page.component.html',
  styles: ``
})
export class HousesPageComponent {
houses = signal<HouseProperty[]>(propertyhouses);


}
