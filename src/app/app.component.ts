import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DealerInventoryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab5';
}
