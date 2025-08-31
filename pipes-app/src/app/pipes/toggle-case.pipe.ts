import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe  implements PipeTransform {

    transform(value: string, toggleCase?: boolean | null): string {
        // console.log({value, toggleCase});
        if (toggleCase === null || toggleCase === undefined) return value;
        return toggleCase ? value.toUpperCase() : value.toLowerCase();
    }

}