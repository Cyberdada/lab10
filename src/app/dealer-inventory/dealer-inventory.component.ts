import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../vehicle';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { VehicleFormComponent } from '../vehicle-form/vehicle-form.component';
import { VehicleFormReactiveComponent } from '../vehicle-form-reactive/vehicle-form-reactive.component';
import { InventoryService } from '../inventory.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dealer-inventory',
  standalone: true,
  imports: [
    CommonModule,
    PhotoGalleryComponent,
    VehicleFormComponent,
    VehicleFormReactiveComponent,
  ],
  templateUrl: './dealer-inventory.component.html',
  styleUrls: ['./dealer-inventory.component.css'],
})
export class DealerInventoryComponent implements OnInit {
  inventory$: Observable<Array<Vehicle>> | undefined;
  vehicleToEdit?: Vehicle;

  constructor(private inventoryService: InventoryService) {}
  ngOnInit(): void {
    this.getInventory();
  }
  add(v: Vehicle) {
    this.inventoryService.add(v).subscribe((_) => {
      this.getInventory();
    });
  }
  beginEditing(v: Vehicle) {
    this.vehicleToEdit = v;
  }
  commit(v: Vehicle) {
    if (this.vehicleToEdit !== undefined) {
      this.inventoryService.update(this.vehicleToEdit.VIN, v).subscribe(() => {
        this.getInventory();
        this.vehicleToEdit = undefined;
      });
    }
  }
  cancel() {
    this.vehicleToEdit = undefined;
  }

  trackByVIN(index: number, car: Vehicle): string {
    return car.VIN;
  }

  delete(car: Vehicle) {
    this.inventoryService.delete(car).subscribe((_) => {
      this.getInventory();
    });
  }
  photoNavigation(photoIndex: number, car: Vehicle) {
    if (photoIndex === car.photos.length - 1) {
      alert('Come visit us in the showroom');
    }
  }
  private getInventory(): void {
    this.inventory$ = this.inventoryService.inventory();
  }
}
