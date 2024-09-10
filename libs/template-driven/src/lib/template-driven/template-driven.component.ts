import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent, TextDirective } from '@rabinsohn/text';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-template-driven',
  standalone: true,
  imports: [
    CommonModule, TextComponent,
    TextDirective, FormsModule
  ],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateDrivenComponent {
  form = viewChild('myContainerForTiti');

  public onSubmit( event: any ) {
    console.log(this.form);
    console.log(event);

  }
}
