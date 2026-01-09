import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ebook-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="ebook-section">
      <div class="content-container">
        <div class="ebook-image">
          <img src="/assets/images/ea-cover.png" alt="Ebook Cover" class="book-cover">
        </div>
        
        <div class="text-content">
          <div class="header-section">
            <div class="title-section">
              <span class="ebook-label">EBOOK</span>
              <h2 class="section-title">
                Convierte tus ideas en<br>
                <span class="highlight">negocios reales</span>
              </h2>
            </div>
            
            <div class="description-section">
              <div class="divider-line"></div>
              <div class="description-content">
                <p class="description-text">
                  Este ebook es una guía directa y sin rodeos para dar forma a tu primer negocio. No te promete atajos, pero sí las claves para que tu visión cobre vida: desde los primeros pasos hasta cómo afrontar las dudas y crecer con propósito. Un recorrido de experiencias reales, estrategias prácticas y mentalidad ganadora.
                </p>
              </div>
            </div>
          </div>
          
          <div class="cta-container">
            <button class="buy-button" (click)="onBuyNow()">COMPRAR YA</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./ebook-section.component.scss']
})
export class EbookSectionComponent {
  onBuyNow(): void {
    alert('Funcionalidad de compra próximamente disponible');
    // Aquí iría la lógica de compra
  }
}