import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
})
export class PhotoGalleryComponent {
  @Input() photos: string[] = [];

  @Output() navigateEvent = new EventEmitter<number>();

  currentIndex = 0;

  next() {
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex += 1;
      this.navigateEvent.emit(this.currentIndex);
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.navigateEvent.emit(this.currentIndex);
    }
  }
}
