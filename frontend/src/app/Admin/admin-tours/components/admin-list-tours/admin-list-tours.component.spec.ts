import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListToursComponent } from './admin-list-tours.component';

describe('ListToursComponent', () => {
  let component: AdminListToursComponent;
  let fixture: ComponentFixture<AdminListToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListToursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
