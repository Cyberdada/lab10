import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
})
export class VehicleFormComponent {
  @Input() canCancel = false;
  @Output() submitEvent = new EventEmitter<Vehicle>();
  @Output() cancelEvent = new EventEmitter();

  @Input() vehicle: Vehicle = {
    VIN: '',
    year: 0,
    make: '',
    model: '',
    mileage: 0,
    price: 0,
    featured: false,
    photos: [],
  };

  cancel(): void {
    this.cancelEvent.emit();
  }

  submit(nForm: NgForm): void {
    const input = nForm.value;

    this.submitEvent.emit({
      VIN: input.veh_vin,
      year: input.veh_year,
      make: input.veh_make,
      model: input.veh_model,
      mileage: input.veh_mileage,
      price: input.veh_price,
      featured: input.veh_featured === '' ? false : input.veh_featured,
      photos: [],
    });
  }
}
