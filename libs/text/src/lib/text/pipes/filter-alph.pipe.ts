import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'filterAlh',
  standalone: true,
})
export class FilterAlphPipe implements PipeTransform {
  transform(value: FormControl, ...args: unknown[]): any {
    if (!isNaN(Number(value.value))) {  // Checks if the value is a number
      return value; // or return 0, null, or another placeholder if needed
    }
    return value;
  }
}
