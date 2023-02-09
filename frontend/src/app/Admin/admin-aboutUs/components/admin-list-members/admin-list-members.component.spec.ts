import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListMembersComponent } from './admin-list-members.component';

describe('AdminListMembersComponent', () => {
  let component: AdminListMembersComponent;
  let fixture: ComponentFixture<AdminListMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListMembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
