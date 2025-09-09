import { JsonPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import type  {Country } from './../../interfaces/country.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'country-page',
  imports: [JsonPipe, ReactiveFormsModule ],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  fb = inject(FormBuilder);
  countryService = inject(CountryService)

  regions = signal( this.countryService.getRegions());
  countriesByRegion = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  // Con esto sabemos que cambio la region del formulario
  // desventaja es que la subscripcion sobrevive 
  // formRegionChanged = this.myForm.get('region')?.valueChanges
  //                         .subscribe(value => {
  //                           console.log(value);                            
  //                         });

  // Otra forma de hacerlo es usando efectos y usar el oncleanup de suscripciones
  onFormChanged = effect((onCleanUp) =>{
    const regionSuscription = this.onRegionChanged();
    const countrySuscription = this.onCountryChanged();

    onCleanUp(() => {
      regionSuscription.unsubscribe();
      console.log(`Subscripcion a onRegionChanged terminada.`);
      countrySuscription.unsubscribe();
      console.log(`Subscripcion a onCountryChanged terminada.`);      
    });
  });

  onRegionChanged() {
    return this.myForm
          .get('region')!
          .valueChanges
          .pipe(
            tap((region)=> console.log(region) ), // solo para hacer el console log
            tap(() => this.myForm.get('country')!.setValue('') ), // Limpia los paises
            tap(() => this.myForm.get('border')!.setValue('') ),  // Limpia los borders
            tap(() => {
              this.borders.set([]);
              this.countriesByRegion.set([]);
            } ),
            switchMap( (region) => this.countryService.getCountriesByRegion(region??''))            
          )
          .subscribe( countries => {
            console.log({countries});
            this.countriesByRegion.set(countries);
          })
  }

  onCountryChanged( ){
    return this.myForm
      .get('country')!
      .valueChanges
      .pipe(
            tap((country)=> console.log(country) ),
            tap(() => this.myForm.get('border')!.setValue('') ),
            filter(value => value!.length >0 ), // evita usar valores
            switchMap( (alphacode) => this.countryService.getCountryByAlphaCode(alphacode??'')), 
            switchMap( (country) => this.countryService.getCountryNames( country.borders ))            
          )
      .subscribe( borders => {
        // console.log({borders});
        this.borders.set(borders);
      })

  }

  onSave() {
    console.log(this.myForm.value);
    
    this.myForm.markAllAsTouched();
  }

}
