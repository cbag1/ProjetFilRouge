import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenererQrComponent } from './generer-qr.component';

describe('GenererQrComponent', () => {
  let component: GenererQrComponent;
  let fixture: ComponentFixture<GenererQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenererQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenererQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
