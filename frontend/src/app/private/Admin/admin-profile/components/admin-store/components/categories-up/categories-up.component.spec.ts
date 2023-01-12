import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesUpComponent } from './categories-up.component';

describe('CategoriesComponent', () => {
  let component: CategoriesUpComponent;
  let fixture: ComponentFixture<CategoriesUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
