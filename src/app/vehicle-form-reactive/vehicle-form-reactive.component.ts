import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Vehicle } from '../vehicle';

function valdidateVIN(control: AbstractControl): ValidationErrors | null {
  const banned = ['I', 'O', 'Q'];

  if (banned.some((str) => control.value.includes(str))) {
    return {
      valdidateVIN: true,
      'Must not contain I, O or Q': 'IOQ',
    };
  }
  return null;
}

@Component({
  selector: 'app-vehicle-form-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vehicle-form-reactive.component.html',
  styleUrls: ['./vehicle-form-reactive.component.css'],
})
export class VehicleFormReactiveComponent {
  vehicleForm = this.fb.group({
    VIN: [
      '',
      {
        validators: [
          Validators.minLength(3),
          Validators.required,
          valdidateVIN,
        ],
      },
    ],
    year: [
      2023,
      {
        validators: [
          Validators.min(2000),
          Validators.max(2023),
          Validators.required,
        ],
      },
    ],
    make: ['', { validators: [Validators.required] }],
    model: ['', { validators: [Validators.required] }],
    mileage: [0, { validators: [Validators.required] }],
    price: [0, { validators: [Validators.required] }],
    featured: [false, { validators: [Validators.required] }],
    photos: [[] as Array<string>],
  });

  get vehicle(): Vehicle {
    return this.vehicleForm.value as Vehicle;
  }
  @Input() set vehicle(value: Vehicle) {
    this.vehicleForm.patchValue(value);
  }

  @Input() canCancel = false;
  @Output() cancelEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter<Vehicle>();
  constructor(private fb: NonNullableFormBuilder) {}

  submit() {
    this.submitEvent.emit(this.vehicleForm.value as Vehicle);
  }
}
