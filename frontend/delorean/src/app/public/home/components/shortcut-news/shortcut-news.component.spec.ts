import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutNewsComponent } from './shortcut-news.component';

describe('ShortcutNewsComponent', () => {
  let component: ShortcutNewsComponent;
  let fixture: ComponentFixture<ShortcutNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcutNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortcutNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
