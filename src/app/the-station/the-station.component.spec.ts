import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheStationComponent } from './the-station.component';

describe('TheStationComponent', () => {
  let component: TheStationComponent;
  let fixture: ComponentFixture<TheStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
