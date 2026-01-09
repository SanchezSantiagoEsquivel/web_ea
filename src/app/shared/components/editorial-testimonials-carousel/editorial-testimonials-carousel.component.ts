import { Component, Input } from '@angular/core';
import { EditorialTestimonialsCarouselInterface } from './interface/editorial-testimonials-carousel.interface';

@Component({
  standalone: true,
  selector: 'app-editorial-testimonials-carousel',
  imports: [],
  templateUrl: './editorial-testimonials-carousel.component.html',
  styleUrl: './editorial-testimonials-carousel.component.scss'
})
export class EditorialTestimonialsCarouselComponent {
 @Input() carouselData!: EditorialTestimonialsCarouselInterface;

  currentIndex = 0;

  next() {
    if (!this.carouselData?.data?.length) return;

    this.currentIndex =
      (this.currentIndex + 1) % this.carouselData.data.length;
  }

  prev() {
    if (!this.carouselData?.data?.length) return;

    this.currentIndex =
      (this.currentIndex - 1 + this.carouselData.data.length) %
      this.carouselData.data.length;
  }

}
