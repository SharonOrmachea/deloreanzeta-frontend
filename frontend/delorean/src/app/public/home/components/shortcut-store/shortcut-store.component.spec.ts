import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutStoreComponent } from './shortcut-store.component';

describe('ShortcutStoreComponent', () => {
  let component: ShortcutStoreComponent;
  let fixture: ComponentFixture<ShortcutStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcutStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortcutStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
