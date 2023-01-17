import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdNewsComponent } from './id-news.component';

describe('IdNewsComponent', () => {
  let component: IdNewsComponent;
  let fixture: ComponentFixture<IdNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
