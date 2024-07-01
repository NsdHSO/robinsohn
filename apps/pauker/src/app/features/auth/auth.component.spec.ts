import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  describe('Init Value', () => {

    let component: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [AuthComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(AuthComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have render header', () => {
        const element: HTMLDivElement = fixture.nativeElement.querySelector('[data-test="auth-header"]')


        expect(element.children.length).toBe(1)
    });
  })
});
