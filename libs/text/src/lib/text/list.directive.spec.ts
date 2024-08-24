import { ListDirective } from './list.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { expect } from '@playwright/test';

describe('TextDirective', () => {

  const setup = (
    element: ElementRef,
    renderer2: Renderer2,
    document: unknown
  ) => TestBed.configureTestingModule({
    providers: [
      {
        provide: ElementRef,
        useValue: element
      },
      {
        provide: Renderer2,
        useValue: renderer2
      },
      {
        provide: DOCUMENT,
        useValue: document
      },
      ListDirective
    ]
  })
    .inject(ListDirective);

  it('should init', () => {
    const elementRef = {} as ElementRef;
    const renderer = {} as Renderer2;
    const document = {
      querySelectorAll: () => ['']
    } as any;
    const directive = setup(elementRef, renderer, document);

    expect(directive)
      .toBeTruthy();
  });

});
