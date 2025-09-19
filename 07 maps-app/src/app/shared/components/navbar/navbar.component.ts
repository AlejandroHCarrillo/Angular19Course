import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { routes } from '../../../app.routes';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { filter } from 'rxjs/internal/operators/filter';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  router = inject(Router);

  routes = routes.map( route => ({
    path: route.path,
    title: `${route.title ?? 'Maps en angular'}`
  })).filter((route)=> route.path !== '**');

  // Usando Señales
  pageTitle = toSignal(this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    // tap((event)=> console.log({event})),
    map((event) => event.url),
    map((url) => routes.find( (route) => `/${ route.path}` === url )?.title ?? 'Mapas app' )
  ));

  // Usando observables
  pageTitle$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    // tap((event)=> console.log({event})),
    map((event) => event.url),
    map((url) => routes.find( (route) => `/${ route.path}` === url )?.title ?? 'Mapas app' )
  );
}
