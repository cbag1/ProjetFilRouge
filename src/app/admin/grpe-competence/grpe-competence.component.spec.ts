import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpeCompetenceComponent } from './grpe-competence.component';

describe('GrpeCompetenceComponent', () => {
  let component: GrpeCompetenceComponent;
  let fixture: ComponentFixture<GrpeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
