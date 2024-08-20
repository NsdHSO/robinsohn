import { ListDirective, StyleTextEnum } from './list.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

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

  it('should create an instance', () => {
    const element: ElementRef = {} as ElementRef;
    const renderer2 = {} as Renderer2;
    const docuument = {
      querySelectorAll: () => ['']
    };
    const directive = setup(element, renderer2, docuument);

    expect(directive.getElementTag(StyleTextEnum.Title_1 as string))
      .toEqual('h1');
  });

});
