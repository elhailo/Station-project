import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateurStationComponent } from './indicateur-station.component';

describe('IndicateurStationComponent', () => {
  let component: IndicateurStationComponent;
  let fixture: ComponentFixture<IndicateurStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicateurStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicateurStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
