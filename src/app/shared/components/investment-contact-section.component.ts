import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-contact-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="investment-contact-section">
      <div class="image-section">
        <img src="/assets/images/20240806_141647_9695jpg.jpg" alt="Eduardo Acevedo" class="contact-image">
      </div>
      
      <div class="text-section">
        <div class="content-container">
          <div class="text-content">
            <div class="icon-container">
              <img src="assets/images/ea-logo.svg" alt="Eduardo Acevedo" class="contact-logo">
            </div>
            
            <h2 class="section-title">¿Necesitas asesoría?</h2>
            
            <p class="section-description">
              Con una trayectoria que combina liderazgo, visión y estrategia, Eduardo Acevedo se ha consolidado como u
            </p>
          </div>
          
          <button class="contact-button" (click)="onContact()">CONTÁCTANOS</button>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./investment-contact-section.component.scss']
})
export class InvestmentContactSectionComponent {
  onContact(): void {
    alert('Funcionalidad de contacto próximamente disponible');
    // Aquí iría la lógica de contacto
  }
}