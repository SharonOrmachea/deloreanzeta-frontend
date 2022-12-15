import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIdentifyComponent } from './form-identify.component';

describe('FormIdentifyComponent', () => {
  let component: FormIdentifyComponent;
  let fixture: ComponentFixture<FormIdentifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIdentifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
