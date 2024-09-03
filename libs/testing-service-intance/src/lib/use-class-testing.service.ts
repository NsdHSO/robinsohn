import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseClassTestingService {
  public text: string;
  arrayPerformance = [
    { name: 'Pauker Ana', id: 0 },
    { name: 'Pauker pavel', id: 1 },
    { name: 'Pauker antonia', id: 2 }
  ];

  constructor() {
    this.text = 'Iancu';
  }

  public name() {
    return signal('Use Class Ivan Signal method');
  }

  /**
   * Test
   */
  addingSomeOnIndex2() {
    this.arrayPerformance = this.arrayPerformance
      .map(( value: {
        name: string,
        id: number
      } ) => {

        if (value.id === 2) {
          value.name = 'Iancu';
        }
        return value;
      });
  }
  public byIndex(
    index: number,
    item: any
  ):any {
    return window.btoa(JSON.stringify(item));
  }
}
