import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionAllComponent } from './prescription-all.component';

describe('PrescriptionAllComponent', () => {
  let component: PrescriptionAllComponent;
  let fixture: ComponentFixture<PrescriptionAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
