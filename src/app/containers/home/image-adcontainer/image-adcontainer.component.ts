import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-adcontainer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-adcontainer.component.html',
  styleUrl: './image-adcontainer.component.less'
})
export class ImageADContainerComponent {
  images: string[] = [
    'images/home/imagesAD/1.png',
    'images/home/imagesAD/2.png',
    'images/home/imagesAD/3.png'
  ];

  currentImageIndex = 0;

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.images.length;
  }
}
