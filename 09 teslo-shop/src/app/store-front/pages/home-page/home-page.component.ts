import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '@/products/components/product-card/product-card.component';
import { ProductsService } from '@/products/services/products.service';
import { Component, inject } from '@angular/core';
import { PaginationComponent } from '@/shared/pagination/pagination.component';
import { PaginationService } from '@/shared/pagination/pagination.service';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {
  productsService = inject(ProductsService);
  paginationService = inject(PaginationService);

  // activatedRoute = inject(ActivatedRoute);
  
  // currentPage = toSignal(
  //   this.activatedRoute.queryParamMap.pipe(
  //     map( params => ( params.get('page') ? +params.get('page')! : 1 )),
  //     map( page => ( isNaN(page) ? 1 : page ))
  //   ), 
  //   { initialValue : 1 },
  // );

  productResorurce = rxResource({
    request: () => ({ page: this.paginationService.currentPage() -1 }),
    loader: ({request}) => {
      return this.productsService.getProducts({
        offset: request.page * 9
      });
    } 
  });

}
