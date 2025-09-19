import { Routes } from '@angular/router';
import { FullScreenMapPageComponent } from './pages/full-screen-map-page/full-screen-map-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';

export const routes: Routes = [
    { 
        path: 'fullscreen', 
        component: FullScreenMapPageComponent,
        title: 'Fulscreen Map'
    },
    { 
        path: 'markers', 
        component: MarkersPageComponent,
        title: 'Marcadores'
    },
    { 
        path: 'houses', 
        component: HousesPageComponent,
        title: 'Propiedades'
    },
    { 
        path: '**', 
        redirectTo: 'fullscreen'
    }

];
