import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionUserComponent } from './prescription-user.component';

describe('PrescriptionUserComponent', () => {
  let component: PrescriptionUserComponent;
  let fixture: ComponentFixture<PrescriptionUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
