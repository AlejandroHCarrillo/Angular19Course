import { RouterLink, RouterLinkActive } from '@angular/router';
import { reactiveRoutes } from './../../../reactive/reactive.routes';
import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

const reactiveItems = reactiveRoutes[0].children ?? [];

@Component({
  selector: 'side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  reactiveMenu: MenuItem[] = reactiveItems
  .filter(item => item.path !== '**') // eliminamos la ruta no deseada '**' 
  .map(({ title, path }) => (
    { 
      title: `${title}`, 
      route: `reactive/${path}` 
    }));

    authMenu: MenuItem[] =  [{
      title: 'Registro',
      route: './auth'
    }]

    countryMenu: MenuItem[] =  [{
      title: 'Paises',
      route: 'country'
    }];

}
