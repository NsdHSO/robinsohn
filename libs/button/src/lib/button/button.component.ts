import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAriaLabelDirective } from '@rabinsohn/accessibility';

@Component({
  selector: 'rob-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content />`,
  styleUrl: './button.component.scss',
  hostDirectives:[
    {
      directive: AddAriaLabelDirective,
      inputs: ['ariaName'],
    }
  ]
})
export class ButtonComponent {

}
