import { Routes } from '@angular/router';
export const routes: Routes = [
    { path: 'basic', title:'Basic Pipes', loadComponent: () => import('./components/basic-page/basic-page.component') },
    { path: 'custom', title:'Custom Pipes', loadComponent: () => import('./components/custom-page/custom-page.component') },
    { path: 'numbers', title:'Numbers Pipes', loadComponent: () => import('./components/numbers-page/numbers-page.component') },
    { path: 'uncommon', title:'Uncommon Pipes', loadComponent: () => import('./components/uncommon-page/uncommon-page.component') },
    { path: '', redirectTo: 'basic', pathMatch: 'full' },
    { path: '**', redirectTo: 'basic' }
];
