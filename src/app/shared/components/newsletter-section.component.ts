import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter-section',
  standalone: true,
  template: `
    <section class="newsletter-section">

      <!-- Content Frame -->
      <div class="content-frame">
        <!-- Title -->
        <h2 class="newsletter-title">Recibe inspiración y pasos concretos para tu proyecto</h2>
        
        <!-- Input Form -->
        <div class="input-container">
          <!-- Email Input -->
          <input 
            type="email" 
            class="email-input" 
            placeholder="Coloca tu email para unirte a la Newsletter"
          >
          
          <!-- CTA Button -->
          <button class="cta-button">
            <span class="cta-text">Suscribirme</span>
          </button>
        </div>
      </div>
      

    </section>
  `,
  styleUrls: ['./newsletter-section.component.scss']
})
export class NewsletterSectionComponent {}