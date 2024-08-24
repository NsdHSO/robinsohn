import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  Renderer2
} from '@angular/core';

export declare type StyleListType =
  'Default'
  | 'Plain'
  | 'Plain_Compact'
  | 'Bullet_List_Checkmarks'
  | 'Ordered_List'

@Directive({
  selector: 'div[listItem]',
  standalone: true
})
export class ListDirective implements AfterViewInit {

  /**
   * Instance of element Ref
   */
  private _elementRef = inject(ElementRef);
  /**
   * Instance of Renderer2
   */
  private _renderer2 = inject(Renderer2);

  /**
   * Input with style
   */
  styleList = input<StyleListType>('Default');

  ngAfterViewInit(): void {
    this.addingPadding();
  }

  private addingPadding() {
    const childNodes = [...this._elementRef.nativeElement.children];
    childNodes.forEach((
      el: HTMLElement,
      index: number
    ) => {
      if (index !== childNodes.length - 1 && index !== 4) {
        const paragraph = el.firstChild;
        this._renderer2?.addClass(paragraph, 'pb-2');
      }
    });
  }
}
