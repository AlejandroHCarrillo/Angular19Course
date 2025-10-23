import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@/products/services/products.service';
import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarrouselComponent } from "@/products/components/product-carrousel/product-carrousel.component";

@Component({
  selector: 'app-product-page',
  imports: [ProductCarrouselComponent],
  templateUrl: './product-page.component.html',
  styles: ``
})
export class ProductPageComponent {
  activatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);

  productIdSlug : string = this.activatedRoute.snapshot.params['idSlug'];

  productResorurce = rxResource({
    request: () => ({ idSlug: this.productIdSlug }),
    loader: ({request}) => {
      return this.productsService.getProductByIdSlug(this.productIdSlug);
    } 
  });

}
