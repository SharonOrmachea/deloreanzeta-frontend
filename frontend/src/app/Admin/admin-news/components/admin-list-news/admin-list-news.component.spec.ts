import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListNewsComponent } from './admin-list-news.component';

describe('AdminListNewsComponent', () => {
  let component: AdminListNewsComponent;
  let fixture: ComponentFixture<AdminListNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
