import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent, TextDirective } from '@rabinsohn/text';
import { FormsModule, NgForm } from '@angular/forms';

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
  @ViewChild('myContainerForTiti') form!: NgForm;

  public onSubmit( event: any ) {
    console.log(this.form);
    console.log(event);

  }
}
