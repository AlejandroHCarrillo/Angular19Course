import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { ProductCardComponent } from '@/products/components/product-card/product-card.component';
import { ProductsService } from '@/products/services/products.service';
import { PaginationService } from '@/shared/pagination/pagination.service';
import { PaginationComponent } from '@/shared/pagination/pagination.component';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './gender-page.component.html',
  styles: ``
})
export class GenderPageComponent {
  productsService = inject(ProductsService);
  paginationService = inject(PaginationService);

  route = inject(ActivatedRoute);
  gender = toSignal( this.route.params
                          .pipe( 
                            map(({ gender }) => gender)
                          )
                   );

  productResorurce = rxResource({
    request: () => ({ gender: this.gender(),
                      page: this.paginationService.currentPage() -1 
                    }),
    loader: ({request}) => {
      return this.productsService.getProducts({
        gender: this.gender(), 
        offset: request.page * 9
      });
    } 
  });



}
