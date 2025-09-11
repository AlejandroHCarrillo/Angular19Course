import { Component, signal } from "@angular/core";

@Component({
    selector:'counter-page',
    templateUrl: './counter-page.component.html',
    styles: `
    button{ 
        padding : 5px;
        margin: 5px;
        width: 75px;
    }
    `
})
export class CounterPageComponent{
counter = 10;
counterSignal = signal(0);

increaseBy(value: number){
    this.counter+=value;
    this.counterSignal.update(current => current + value);
}
reset(){
    this.counter = 0;
    this.counterSignal.set(0);
};
}