import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-template-driven',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateDrivenComponent {}
