import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseClassOverWritingService {
  public text: string;

  constructor() {
    this.text = 'OverWriting Iancu';
  }

  public name() {
    return signal('Ivan Signal method');
  }
}
