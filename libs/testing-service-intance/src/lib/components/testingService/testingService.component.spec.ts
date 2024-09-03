import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingServiceComponent } from './testingService.component';

describe('TestingServiceComponent', () => {
  let component: TestingServiceComponent;
  let fixture: ComponentFixture<TestingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
