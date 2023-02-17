import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUpComponent } from './news-up.component';

describe('NewsUpComponent', () => {
  let component: NewsUpComponent;
  let fixture: ComponentFixture<NewsUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
