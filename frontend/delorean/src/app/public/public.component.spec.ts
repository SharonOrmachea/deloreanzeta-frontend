import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './home/components/banner/banner.component';
import { HomeComponent } from './home/pages/home.component';

import { PublicComponent } from './public.component';

describe('PublicComponent', () => {
  let component: PublicComponent;
  let fixture: ComponentFixture<PublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PublicComponent,
        HomeComponent,
        BannerComponent
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
