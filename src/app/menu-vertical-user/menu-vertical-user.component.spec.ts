import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVerticalUserComponent } from './menu-vertical-user.component';

describe('MenuVerticalUserComponent', () => {
  let component: MenuVerticalUserComponent;
  let fixture: ComponentFixture<MenuVerticalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVerticalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVerticalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
