import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent, TextDirective } from '@rabinsohn/text';

@Component({
  selector: 'lib-dinamic-template',
  standalone: true,
  imports: [CommonModule, TextComponent, TextDirective],
  templateUrl: './dinamic-template.component.html',
  styleUrl: './dinamic-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DinamicTemplateComponent {}
