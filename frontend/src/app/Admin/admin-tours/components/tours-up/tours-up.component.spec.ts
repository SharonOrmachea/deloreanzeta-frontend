import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursUpComponent } from './tours-up.component';

describe('ToursUpComponent', () => {
  let component: ToursUpComponent;
  let fixture: ComponentFixture<ToursUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
