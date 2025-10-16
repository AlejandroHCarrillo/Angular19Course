import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontNavbarComponent } from "../../components/front-navbar/front-navbar.component";

@Component({
  selector: 'app-store-frontend-layout',
  imports: [RouterOutlet, FrontNavbarComponent],
  templateUrl: './store-frontend-layout.component.html',
  styles: ``
})
export class StoreFrontendLayoutComponent {

}
