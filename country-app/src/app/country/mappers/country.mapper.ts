import type { RESTCountry } from '../interfaces/rest-country.interface';
import type { Country } from './../interfaces/country.interface';

export class CountryMapper {

    static mapRESTCountryToCountry(restCountry: RESTCountry): Country {
        return {
            capital: restCountry.capital[0],
            cca2: restCountry.cca2,
            flag: restCountry.flag,
            flagSvg: restCountry.flags.svg,
            name: restCountry.translations['spa'].common ?? 'No hay nombre en español.',
            nombre: restCountry.name.nativeName.spa?.common || restCountry.name.common,
            languages: restCountry.languages.spa,
            population: restCountry.population,
            region: restCountry.region,
            subregion: restCountry.subregion
        };    
    }

    static mapRESTCountriesToCountriesArray(restCountries: RESTCountry[]): Country[] {
        return restCountries.map((conutry) => this.mapRESTCountryToCountry(conutry));
    }
}