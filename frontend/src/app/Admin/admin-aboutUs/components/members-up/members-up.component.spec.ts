import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersUpComponent } from './members-up.component';

describe('MembersUpComponent', () => {
  let component: MembersUpComponent;
  let fixture: ComponentFixture<MembersUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
