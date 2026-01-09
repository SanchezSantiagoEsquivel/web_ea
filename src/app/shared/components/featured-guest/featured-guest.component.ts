import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-guest',
  imports: [CommonModule],
  templateUrl: './featured-guest.component.html',
  styleUrl: './featured-guest.component.scss'
})
export class FeaturedGuestComponent {

  cards = [
    {
      name: 'Fernando Nicolas',
      video: 'fernando-nicolas-card.mp4',
      description: 'Del sueño al imperio gastronomico'
    },
    {
      name: 'Valentin Jaremtchuk',
      video: 'valentin-jaremtchuk-card.mp4',
      description: 'Del sueño al imperio gastronomico'
    },
    {
      name: 'Jorge Redondo',
      video: 'jorge-redondo-card.mp4',
      description: 'Reinventando las reglas del diseño'
    },
    {
      name: 'Alejandro Terroba',
      video: 'alejandro-terroba-card.mp4',
      description: 'Marketing y pasión sobre ruedas'
    },
    {
      name: 'Albert Beniflah',
      video: 'albert-beniflah-card.mp4',
      description: 'Del ocio al imperio del lifestyle'
    },
    {
      name: 'Enzo Martinez',
      video: 'enzo-martinez-card.mp4',
      description: 'Comunicar moda con proposito'
    }
    ,{
      name: 'Helena Soto',
      video: 'helena-soto-card.mp4',
      description: 'liderar, invertir y crear sin limites'
    },
    {
      name: 'David Ascanio',
      video: 'david-ascanio-card.mp4',
      description: 'vivir la musica con autencidad'
    }
  ]

  cardsPerStep = 3;
  totalSteps = 3; 
  visibleWidth = 1260;
  currentStep = 0;

  cardWidth = 275;
gap = 24;

  dots = Array(this.totalSteps);

 get transform(): string {
  const offset = this.stepOffsets[this.currentStep] ?? 0;
  return `translateX(-${offset}px)`;
}


get stepOffsets(): number[] {
  const oneCard = this.cardWidth + this.gap;
  const firstStepOffset = oneCard * 1.5;

  return [
    0,               
    firstStepOffset, 
    this.maxOffset
  ];
}



  next(): void {
    if (this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
    }
  }

  prev(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

get maxOffset(): number {
  const totalWidth =
    this.cards.length * this.cardWidth +
    (this.cards.length - 1) * this.gap;

  return Math.max(totalWidth - this.visibleWidth, 0);
}


}

