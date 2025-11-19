import { Component } from '@angular/core';

@Component({
  selector: 'app-brands-section',
  standalone: true,
  template: `
    <section class="brands-section">
      <div class="wireframe-section">
        <div class="content-header">
          <h2 class="section-title">Marcas que confían en Eduardo</h2>
          <p class="section-subtitle">Empresas líderes que han trabajado con nuestro expertise</p>
        </div>
        <div class="brands-grid">
          <div class="brand-item">
            <img src="/assets/images/brands/brand-1.png" alt="Brand 1" class="brand-logo">
          </div>
          <div class="brand-item">
            <img src="/assets/images/brands/brand-2.png" alt="Brand 2" class="brand-logo">
          </div>
          <div class="brand-item">
            <img src="/assets/images/brands/brand-3.png" alt="Brand 3" class="brand-logo">
          </div>
          <div class="brand-item">
            <img src="/assets/images/brands/brand-4.png" alt="Brand 4" class="brand-logo">
          </div>
          <div class="brand-item">
            <img src="/assets/images/brands/brand-5.png" alt="Brand 5" class="brand-logo">
          </div>
          <div class="brand-item">
            <img src="/assets/images/brands/brand-6.png" alt="Brand 6" class="brand-logo">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="stats-section">
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Empresas</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">€10M+</span>
            <span class="stat-label">Inversión gestionada</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">15</span>
            <span class="stat-label">Años experiencia</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./brands-section.component.scss']
})
export class BrandsSectionComponent {}