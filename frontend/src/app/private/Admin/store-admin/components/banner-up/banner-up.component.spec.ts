import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerUpComponent } from './banner-up.component';

describe('BannerUpComponent', () => {
  let component: BannerUpComponent;
  let fixture: ComponentFixture<BannerUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
