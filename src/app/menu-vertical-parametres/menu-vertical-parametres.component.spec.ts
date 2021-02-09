import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVerticalParametresComponent } from './menu-vertical-parametres.component';

describe('MenuVerticalParametresComponent', () => {
  let component: MenuVerticalParametresComponent;
  let fixture: ComponentFixture<MenuVerticalParametresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVerticalParametresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVerticalParametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
