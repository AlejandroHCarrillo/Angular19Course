import { Component, inject, signal } from '@angular/core';
import { SideMenuOptionComponent } from "../side-menu-option/side-menu-option.component";
import { MenuOption } from '../../../interfaces/menu-option';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from 'src/app/gifs/services/gif.service';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styles: ``
})
export class SideMenuOptionsComponent {
  gifService = inject(GifService);
  menuOptions: MenuOption[] = [
    {
      icon: "fa-solid fa-chart-line",
      label:  "Trending",
      subLabel: "Gifs populares",
      route:  "/dashboard/trending"
    },
    {
      icon: "fa-solid fa-magnifying-glass",
      label:  "Search",
      subLabel: "Buscar gifs",
      route:  "/dashboard/search"
    }
  ];

  menuHistory = signal< MenuOption[]>([]);

}
