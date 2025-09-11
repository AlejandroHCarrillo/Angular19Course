import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private currentLocale = signal<AvailableLocale>('es');
  
  constructor() {
    const locale = localStorage.getItem('locale') as AvailableLocale ?? 'es';
    this.currentLocale.set(locale);
   }

  get getLocale() {
    return this.currentLocale();
  }

  change(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload(); // Recargar la página para aplicar el nuevo idioma
  }

}
