import { Routes } from "@angular/router";
import { StoreFrontendLayoutComponent } from "./layouts/store-frontend-layout/store-frontend-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { GenderPageComponent } from "./pages/gender-page/gender-page.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { NotfoundPageComponent } from "./pages/notfound-page/notfound-page.component";

export const storeFrontRoutes: Routes =  [
  {
    path: '',
    component: StoreFrontendLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent, 
      },
      {
        path: 'gender/:gender',
        component: GenderPageComponent, 
      },
      {
        path: 'product/:idSlug',
        component: ProductPageComponent, 
      },
      {
        path: '**',
        component: NotfoundPageComponent, 
      },    
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default storeFrontRoutes;
