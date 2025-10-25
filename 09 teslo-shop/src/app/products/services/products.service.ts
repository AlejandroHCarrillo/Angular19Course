import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Pipe } from '@angular/core';
import { Product, ProductResponse } from '../interfaces/producto.interface';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;
interface Options {
    limit?:number,
    offset?:number,
    gender?:string
}


@Injectable({providedIn: 'root'})
export class ProductsService {
    private http = inject(HttpClient)

    private productsCache = new Map<string, ProductResponse>();
    private productCache = new Map<string, Product>();
    
    getProducts(options : Options): Observable<ProductResponse>{
        const { limit = 9, offset = 0, gender = ''} = options;

        
        const key = `${limit}-${offset}-${gender}`
        if(this.productsCache.has(key)){
            // this.productsCache.clear();
            console.log(this.productsCache.entries());
            return of(this.productsCache.get(key)!);
        }

        return this.http.get<ProductResponse>(`${baseUrl}/products`, 
                    {
                        params:{
                            limit: limit,
                            offset: offset,
                            gender: gender
                        }
                    })
        .pipe(
            tap((resp)=> console.log(resp)),
            tap((resp)=> this.productsCache.set(key, resp))
        );        
    }

    getProductByIdSlug(idSlug:string): Observable<Product>{
        const key = `${idSlug}`;
        if(this.productCache.has(key)){
            console.log(this.productCache.entries());
            return of(this.productCache.get(key)!);
        }

        return this.http.get<Product>(`${baseUrl}/products/${idSlug}`)
        .pipe(
            tap((resp)=> console.log(resp)),
            tap((resp)=> this.productCache.set(key, resp)))        
    }

}