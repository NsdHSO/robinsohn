import { ButtonComponent } from './button.component';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { expect } from '@playwright/test';

describe('ButtonComponent', () => {
  describe('Init Value', () => {
      let component: ButtonComponent;
      let fixture: ComponentFixture<ButtonComponent>;

      beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ButtonComponent]
        })
          .compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should create', () => {
        expect(component)
          .toBeTruthy();
      });
    }
  );
});
