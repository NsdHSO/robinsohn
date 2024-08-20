import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

export declare type StyleListType =
  'Default'
  | 'Plain'
  | 'Plain_Compact'
  | 'Bullet_List_Checkmarks'
  | 'Ordered_List'

@Directive({
  selector: 'lib-text',
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
   * Instance of Document
   */
  private _document = inject(DOCUMENT);
  /**
   * Input with style
   */
  styleList = input<StyleListType>('Default');


  ngAfterViewInit(): void {

  }
}
