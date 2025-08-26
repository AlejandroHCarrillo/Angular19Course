import { RESTCountry } from './../interfaces/rest-country.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CountryMapper } from '../mappers/country.mapper';
import { catchError, delay, map, Observable, of, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1'; 

@Injectable({
  providedIn: 'root'
})
export class CountryService {
private http =  inject(HttpClient);

searchByCapital(query: string): Observable<Country[]> {
  query = query.trim().toLowerCase();
  console.log(`Se recibio el emit en el servicio: ${query}`);

  return of([]);
  const fullURL = `${API_URL}/capital/${query}`;

  // console.log({ fullURL });
  return this.http
  .get<RESTCountry[]>(fullURL)
        .pipe(
          map(restCountries =>   CountryMapper.mapRESTCountriesToCountriesArray(restCountries) ),
          delay(300), // TODO: Remove dalay
          catchError((error) => {
            console.log(`Error fetching: ${error}`);
            return throwError(() => new Error(`No se encontraron países para la capital: ${query}`));
          })
        );
  }

  searchByCountry(query: string): Observable<Country[]> {
  query = query.trim().toLowerCase();
  const fullURL = `${API_URL}/name/${query}`;
  // console.log({ fullURL });
  return this.http
  .get<RESTCountry[]>(fullURL)
        .pipe(
          map(restCountries =>   CountryMapper.mapRESTCountriesToCountriesArray(restCountries) ),
          delay(300),// TODO: Remove dalay
          catchError((error) => {
            console.log(`Error fetching: ${error}`);
            return throwError(() => new Error(`No se encontraron países para la capital: ${query}`));
          })
        );
  }

  searchCountryByCode(code: string): Observable<Country|undefined> {
  code = code.trim().toLowerCase();
  const fullURL = `${API_URL}/alpha/${code}`;
  // console.log({ fullURL });
  return this.http
  .get<RESTCountry[]>(fullURL)
        .pipe(
          map(restCountries =>   CountryMapper.mapRESTCountriesToCountriesArray(restCountries) ),
          map(countries => countries.at(0) ) ,
          catchError((error) => {
            console.log(`Error fetching: ${error}`);
            return throwError(() => new Error(`No se encontra un países con ese codigo: ${code}`));
          })

        );
  }


}
