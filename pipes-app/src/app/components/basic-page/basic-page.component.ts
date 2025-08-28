import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  styles: ``
})
export default class BasicPageComponent {
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
}
