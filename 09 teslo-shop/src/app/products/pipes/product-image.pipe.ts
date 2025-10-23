import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
    name: 'productImage'
})

export class ProductImagePipe implements PipeTransform {
    transform(value: string | string[]): any {
        const urlImageProduct =  `${environment.fileImageUrl}/product/`;
        const noProductImage = `./assets/images/no-image.jpg`
        let urlImage = "";
        if (Array.isArray(value)) {
            if(value.length===0){
                return noProductImage;
            }
            urlImage = value[0];
        }
        if (typeof value === 'string') {
            if (value === '') return noProductImage;
            urlImage = value;
        }

        return urlImageProduct + urlImage;
    }
}