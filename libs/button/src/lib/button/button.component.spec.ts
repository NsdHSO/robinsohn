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

      it('should have a specific attribute', fakeAsync(() => {
        // Wait for ngAfterViewInit
        fixture.whenStable()
          .then(() => {
            fixture.detectChanges(); // Trigger ngAfterViewInit and any subsequent changes
            tick(1000)
            const element = component.element.nativeElement; // Access the host element

            expect(element.hasAttribute('aria-label'))
              .toBeTruthy(); // Replace
            // 'your-attribute-name' with the actual attribute you are checking

            expect(element.getAttribute('aria-label')).toBe('youa');
            // 'your-attribute-name' with the actual attribute you are checking
          });
      }));
    }
  );
});
