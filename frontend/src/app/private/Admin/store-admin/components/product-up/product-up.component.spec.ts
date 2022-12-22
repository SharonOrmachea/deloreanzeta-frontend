import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpComponent } from './product-up.component';

describe('ProductUpComponent', () => {
  let component: ProductUpComponent;
  let fixture: ComponentFixture<ProductUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
