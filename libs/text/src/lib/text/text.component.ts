import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-text',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content/>',
})
export class TextComponent implements OnChanges {
  ngOnChanges( changes: SimpleChanges ): void {
    console.log(changes);
  }
}
