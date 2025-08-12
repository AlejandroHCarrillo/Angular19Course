import { Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from '@angular/common';
// import { CommonModule } from '@angular/common';

@Component({
    selector:'hero-page',
    imports: [UpperCasePipe],
    templateUrl: './hero-page.component.html',
    styles: `
    button{ 
        padding : 5px;
        margin: 5px;
    }
    `
})
export class HeroPageComponent{
    name = signal('');
    age = signal(0);
    heroDescription = computed(()=>{
        return `${ this.name() } - ${ this.age() }`;
    });

    capitalizedName = computed (()=> this.name().toUpperCase());

    getHeroDescription(){
        return `${ this.name() } - ${ this.age() }`;
    }

    changeHero(){
        this.name.set('Spiderman');
        this.age.set(22);    
    };

    resetForm(){
        this.name.set('Ironman ');
        this.age.set(45);    
    };

    changeAge(){
        this.age.set(60);    
    }

}