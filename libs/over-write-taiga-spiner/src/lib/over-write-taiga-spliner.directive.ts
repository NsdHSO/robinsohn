import {
  Directive,
  ElementRef,
  inject,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  standalone: true,
  selector: 'tui-loader'
})
export class OverWriteTigaSpliner implements OnInit {
  elementRef = inject(ElementRef);
  renderer2 = inject(Renderer2);
  ngOnInit(): void {
    this.renderer2.addClass(this.elementRef.nativeElement, 'bg-blue-500');
  }


}