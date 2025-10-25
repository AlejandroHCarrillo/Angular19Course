import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@/products/services/products.service';
import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarrouselComponent } from "@/products/components/product-carrousel/product-carrousel.component";
import { PaginationService } from '@/shared/pagination/pagination.service';

@Component({
  selector: 'app-product-page',
  imports: [ProductCarrouselComponent],
  templateUrl: './product-page.component.html',
  styles: ``
})
export class ProductPageComponent {
  productsService = inject(ProductsService);
  paginationService = inject(PaginationService);

  activatedRoute = inject(ActivatedRoute);
  productIdSlug : string = this.activatedRoute.snapshot.params['idSlug'];

  productResorurce = rxResource({
    request: () => ({ 
                      idSlug: this.productIdSlug,
                      page: this.paginationService.currentPage() -1 
                    }),
    loader: ({request}) => {
      return this.productsService.getProductByIdSlug(this.productIdSlug);
    } 
  });

}
