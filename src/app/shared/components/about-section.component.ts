import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section class="about-section">
      <!-- About Section Frame -->
      <div class="about-frame">
        <!-- Background Photo -->
        <div class="ea-photo-landscape"></div>
        
        <!-- Typography Background -->
        <div class="eduardo-text eduardo-1">EDUARDO</div>
        <div class="eduardo-text eduardo-2">EDUARDO</div>
        <div class="eduardo-text eduardo-3">EDUARDO</div>
        <div class="acevedo-text acevedo-1">ACEVEDO</div>
        <div class="acevedo-text acevedo-2">ACEVEDO</div>
        <div class="acevedo-text acevedo-3">ACEVEDO</div>
        
        <!-- Main Photo -->
        <div class="main-photo"></div>
      </div>
      
      <!-- Background Overlay -->
      <div class="background-overlay"></div>
      
      <!-- Content Card -->
      <div class="content-card">
        <!-- Card Content -->
        <div class="card-content">
          <div class="content-frame">
            <div class="header-section">
              <div class="title-section">
                <div class="sobre-label">SOBRE</div>
                <div class="divider-line"></div>
                <div class="name-title">Eduardo Acevedo</div>
              </div>
              <div class="description-section">
                <div class="icon-section"></div>
                <div class="text-content">
                  <p class="description-text">
                    Un podcast donde las voces del real estate y el mundo empresarial cuentan sus historias reales. 
                    Aquí no hay guion ni frases hechas: cada episodio explora aprendizajes, decisiones clave y las 
                    lecciones que surgen cuando la pasión se encuentra con la estrategia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Action Section -->
        <div class="action-section">
          <div class="action-divider"></div>
          <button class="cta-button">CONOCER MÁS</button>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {}