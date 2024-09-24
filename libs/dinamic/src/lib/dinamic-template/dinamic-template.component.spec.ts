import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DinamicTemplateComponent } from './dinamic-template.component';

describe('DinamicTemplateComponent', () => {
  let component: DinamicTemplateComponent;
  let fixture: ComponentFixture<DinamicTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinamicTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DinamicTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
