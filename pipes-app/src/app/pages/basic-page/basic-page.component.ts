import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  styles: ``
})
export default class BasicPageComponent {
 localservice = inject(LocalService);
 currentLocal = signal(inject(LOCALE_ID));
 
 nameLower = signal('alejandro');
 nameUpper = signal('Alejandro');
 fullName = signal('AlEjAnDrO HerNaNdEz');

 customDate = signal(new Date());

 tickingDateEffect = effect((onCleanup) => {
  const interval = setInterval(() => {
    console.log("tick");    
   this.customDate.set(new Date());
  }, 1000);
  onCleanup(() => clearInterval(interval)); // MUY IMPORTANTE IMPLEMENTAR ESTE CLEANUP PARA EVITAR FUGAS DE MEMORIA
 });

 changeLocale(locale: AvailableLocale) {
   this.localservice.change(locale);
 }
}
