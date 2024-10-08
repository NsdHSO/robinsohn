import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  Input,
  input,
  Renderer2
} from '@angular/core';
import { AddAriaLabelDirective } from '@rabinsohn/accessibility';
import { DOCUMENT } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export type StyleTextType =
  'Title_1'
  | 'Title_2'
  | 'Title_3'
  | 'Medium_1'
  | 'Medium_2'
  | 'Medium_3'
  | 'Small_1'
  | 'Small_2'
  | 'Small_3';

export enum StyleTextEnum {
  Title_1 = 'Title_1',
  Title_2 = 'Title_2',
  Title_3 = 'Title_3',
  Medium_1 = 'Medium_1',
  Medium_2 = 'Medium_2',
  Medium_3 = 'Medium_3',
  Small_1 = 'Small_1',
  Small_2 = 'Small_2',
  Small_3 = 'Small_3',
}

@Directive({
  selector: 'lib-text',
  standalone: true,
  hostDirectives: [{ directive: AddAriaLabelDirective, inputs: ['ariaName'] }]
})
export class TextDirective implements AfterViewInit {
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
   *
   */
  private _destroyed$ = inject(DestroyRef);
  /**
   *
   */
  @Input()
  reactiveValueChange?: Observable<unknown>;
  /**
   * Input with style
   */
  styleText = input<StyleTextType>(StyleTextEnum.Small_1);
  /**
   * Color for text
   */
  colorText = input<string>('text-slate-800 dark:text-indigo-50');

  ngAfterViewInit(): void {
    this.verifiedIfIsReactiveOrNot();
  }

  /**
   * Subscribe on value changes and applied the contet
   * @private
   */
  private verifiedIfIsReactiveOrNot() {
    if (this.reactiveValueChange !== undefined) {
    this.reactiveValueChange?.pipe(tap(( vlaue: unknown ) => {
        this.checkContentAndApplied(vlaue);
      })
      , takeUntilDestroyed(this._destroyed$))
      .subscribe();
    }
    this.checkContentAndApplied();
  }

  getElementTag( style: string ): string {
    switch (style as StyleTextType) {
      case StyleTextEnum.Title_1:
        return 'h3';
      case StyleTextEnum.Title_2:
        return 'h2';
      case StyleTextEnum.Title_3:
        return 'h1';
      default:
        return 'p';
    }
  }

  getElementClasses( style: string ): string[] {
    switch (style as StyleTextEnum) {
      case StyleTextEnum.Medium_1:
        return [
          'text-2xl', ...this.colorText()
            .split(' ')
        ];
      case StyleTextEnum.Medium_2:
        return [
          'text-3xl', ...this.colorText()
            .split(' ')
        ];
      case StyleTextEnum.Medium_3:
        return [
          'text-6xl', ...this.colorText()
            .split(' ')
        ];
      case StyleTextEnum.Small_1:
        return [
          'text-base', ...this.colorText()
            .split(' ')
        ];
      case StyleTextEnum.Small_2:
        return [
          'text-2xl', ...this.colorText()
            .split(' ')
        ];
      case StyleTextEnum.Small_3:
        return [
          'text-5xl', ...this.colorText()
            .split(' ')
        ];
      case StyleTextEnum.Title_3:
        return [
          'text-7xl', ...this.colorText()
            .split(' '), 'font-bold'
        ];
      case StyleTextEnum.Title_2:
        return [
          'text-3xl', ...this.colorText()
            .split(' '), 'font-bold'
        ];
      case StyleTextEnum.Title_1:
        return [
          'text-1xl', ...this.colorText()
            .split(' '), 'font-bold'
        ];
      // Add cases for other styles as needed
      default:
        return ['bg-red-500'];
    }
  }

  createStyledElement(
    tag: string,
    classes: string[],
    content: string
  ): void {
    const element = this._document.createElement(tag);
    element.innerText = content;

    classes.forEach(className => this._renderer2.addClass(element, className));

    // Clear the original content
    this._renderer2.setProperty(this._elementRef.nativeElement,
      'innerText',
      ''
    );

    // Append the newly created element
    this._renderer2.appendChild(this._elementRef.nativeElement, element);
    this._renderer2.setStyle(this._elementRef.nativeElement.firstChild,
      'hyphens',
      'auto'
    );
  }

  /**
   * Check content and remove all elements after applied the style and content
   * @private
   */
  private checkContentAndApplied( value?: unknown ) {
    const hostElement = this._elementRef.nativeElement;
    const content = hostElement.innerText?.trim();

    if (!content) {
      console.error(
        'No content found inside <lib-text>. Please check the content projection.');
    }

    this.appliedStyleAndAppended(value?? content);
  }

  /**
   * Applied style and append the content on what element choose
   * @param content
   * @private
   */
  private appliedStyleAndAppended( content: string| any ) {
    const elementTag = this.getElementTag(this.styleText());
    const elementClasses = this.getElementClasses(this.styleText());
    this.createStyledElement(elementTag, elementClasses, content);
  }
}
