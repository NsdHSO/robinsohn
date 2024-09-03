import { Component, inject, signal, TrackByFunction } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent, TextDirective } from '@rabinsohn/text';
import { UseClassTestingService } from '../../use-class-testing.service';

@Component({
  selector: 'lib-testing-service',
  standalone: true,
  imports: [CommonModule, TextComponent, TextDirective],
  templateUrl: './testingService.component.html',
  styleUrl: './testingService.component.scss',
  providers: [
    UseClassTestingService
  ]
})
export class TestingServiceComponent {
  arrayPerformance = signal([
    { name: 'Pauker Ana', id: 1 },
    { name: 'Pauker pavel', id: 2 },
    { name: 'Pauker antonia', id: 43}
  ])


  public name() {
    return signal('Use Class Ivan Signal method');
  }

  /**
   * Test
   */
  addingSomeOnIndex2() {
      this.arrayPerformance.update((value)=> value.map(item=> {
        if (item.id === 2) {
          item.name = 'Iancu';
        }
        return item
      }))
  }
  public byIndex(
    index: number,
    item: any
  ):any {
    return item.name
  }

}
