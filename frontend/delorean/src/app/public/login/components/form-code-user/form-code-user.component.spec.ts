import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCodeUserComponent } from './form-code-user.component';

describe('CodeUserComponent', () => {
  let component: FormCodeUserComponent;
  let fixture: ComponentFixture<FormCodeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCodeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCodeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
