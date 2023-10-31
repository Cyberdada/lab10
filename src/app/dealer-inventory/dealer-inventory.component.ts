import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../vehicle';
import { Inventory } from '../inventory';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-dealer-inventory',
  standalone: true,
  imports: [CommonModule, PhotoGalleryComponent],
  templateUrl: './dealer-inventory.component.html',
  styleUrls: ['./dealer-inventory.component.css'],
})
export class DealerInventoryComponent {
  inventory = Inventory;

  trackByVIN(index: number, car: Vehicle): string {
    return car.VIN;
  }

  delete(car: Vehicle) {
    this.inventory = this.inventory.filter((c) => c.VIN != car.VIN);
  }
  photoNavigation(photoIndex: number, car: Vehicle) {
    if (photoIndex === car.photos.length - 1) {
      alert('Come visit us in the showroom');
    }
  }
}
