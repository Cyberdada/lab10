import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFormReactiveComponent } from './vehicle-form-reactive.component';

describe('VehicleFormReactiveComponent', () => {
  let component: VehicleFormReactiveComponent;
  let fixture: ComponentFixture<VehicleFormReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VehicleFormReactiveComponent]
    });
    fixture = TestBed.createComponent(VehicleFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
