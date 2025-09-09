import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);  
  private baseUrl = "https://restcountries.com/v3.1";

  private _regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania', ];

  getRegions(): string[]{
    return [...this._regions];
  }

  getCountriesByRegion(region: string) : Observable<Country[]> {
    console.log({region});    
    if(!region) return of([]);

    const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`
    console.log(url);
    
    return this.http.get<Country[]>(url);
  }

  getCountryByAlphaCode(alphacode: string): Observable<Country>{
    console.log({alphacode});    
    if(!alphacode) return of();
    
    const url = `${this.baseUrl}/alpha/${alphacode}?fields=cca3,name,borders`
    return this.http.get<Country>(url);
  }

  getCountryNames(countryCodes: string[]) : Observable<Country[]>{
    if(!countryCodes || countryCodes.length === 0) return of([]);

    // declaramos un request como un arreglo de observables temporalmente vacio
    const countriesRequest: Observable<Country>[] = []; 

    countryCodes.forEach(code => {
        const request = this.getCountryByAlphaCode(code);
        // aqui agregamos los request para cada codigo de pais 
        // al arreglo de requests que crramos antes
        countriesRequest.push(request);
    });
    // Aqui usamos nuestro arreglo de requests de paises
    // combineLatest nos pemite pasar un arreglo de suscripciones
    // y tener los resultados para todas.
    return combineLatest(countriesRequest);
  }

}
