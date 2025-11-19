import { Component } from '@angular/core';

@Component({
  selector: 'app-investment-section',
  standalone: true,
  template: `
    <section class="investment-section">
      <div class="photo-container">
        <div class="overlay-gradient"></div>
        <div class="content-wrapper">
          <div class="investment-content">
            <h2 class="section-title">Club de Inversión Exclusivo</h2>
            <p class="section-description">
              Únete a un grupo selecto de inversores que buscan oportunidades únicas 
              en el mercado inmobiliario y empresarial. Acceso directo a deals privados 
              y estrategias probadas.
            </p>
            <div class="features-list">
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span class="feature-text">Deals exclusivos pre-mercado</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span class="feature-text">Análisis detallado de oportunidades</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span class="feature-text">Red de contactos premium</span>
              </div>
            </div>
            <button class="cta-button">UNIRSE AL CLUB</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./investment-section.component.scss']
})
export class InvestmentSectionComponent {}