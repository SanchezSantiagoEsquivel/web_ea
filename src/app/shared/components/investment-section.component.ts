import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="investment-section">
      <div class="photo-section">
        <div class="section-container">
          <div class="content-wrapper">
            <div class="header-content">
            <div class="title-group">
              <div class="label-container">
                <span class="label">OPORTUNIDADES DE INVERSIÓN</span>
                <div class="divider"></div>
              </div>
              <h2 class="main-title">Invierte con estrategia, crece con propósito</h2>
            </div>
            <p class="description">
              Cada proyecto es una historia que combina visión, estrategia y acción. 
              Juntas, estas empresas demuestran cómo las ideas pueden crecer para impactar vidas, 
              transformar espacios y aportar algo más que cifras: experiencias y confianza.
            </p>
          </div>
          
          <div class="cards-container">
            <div class="investment-card">
              <div class="icon-wrapper">
                <img src="assets/icons/house-02.png" alt="Compra una propiedad" width="20" height="20">
              </div>
              <h3 class="card-title">COMPRA UNA PROPIEDAD</h3>
              <p class="card-description">Tu participación puede ser, vía equity o vía deuda, en proyectos inmobiliarios alineados con tus objetivo</p>
            </div>
            
            <div class="investment-card">
              <div class="icon-wrapper">
                <img src="assets/icons/paint-brush-02.png" alt="Renovación y gestión" width="20" height="20">
              </div>
              <h3 class="card-title">RENOVACIÓN Y GESTIÓN</h3>
              <p class="card-description">Renovamos y amueblamos tu propiedad para una gestión óptima en la venta o alquileres.</p>
            </div>
            
            <div class="investment-card">
              <div class="icon-wrapper">
                <img src="assets/icons/euro.png" alt="Altas rentabilidades" width="20" height="20">
              </div>
              <h3 class="card-title">ALTAS RENTABILIDADES</h3>
              <p class="card-description">En el momento de recuperar la inversión, podrás recibir tu dinero junto y los beneficios generados.</p>
            </div>
          </div>
          </div>
          
          <button class="cta-button">
          <div class="btn-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12L4 12M20 12L15.0001 17M20 12L15 7" stroke="white" stroke-width="1.5"/>
            </svg>
          </div>
          <span class="btn-text">EMPEZAR A INVERTIR</span>
        </button>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./investment-section.component.scss']
})
export class InvestmentSectionComponent {}
