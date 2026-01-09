import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-startups-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="startups-section">
      <div class="video-container">
        <video class="background-video" autoplay muted loop playsinline>
          <source src="assets/videos/podcracks-section-home.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
      </div>
      <div class="content-card">
        <div class="card-content">
          <div class="header-section">
            <div class="title-group">
              <span class="label">PODCRACKS</span>
              <div class="divider"></div>
              <h2 class="title">Conversaciones con quienes redefinen <em class="italic-text">el éxito</em></h2>
            </div>
            <div class="description-group">
              <div class="vertical-line"></div>
              <p class="description">
                Un podcast donde las voces del real estate y el mundo empresarial cuentan sus historias reales. 
                Aquí no hay guion ni frases hechas: cada episodio explora aprendizajes, decisiones clave y las 
                lecciones que surgen cuando la pasión se encuentra con la estrategia.
              </p>
            </div>
          </div>
          <div class="platforms">
            <button class="platform-button">
              <div class="button-content">
                <img src="assets/images/spotify.png" alt="Spotify" class="platform-logo">
              </div>
            </button>
            <button class="platform-button youtube">
              <div class="button-content">
                <img src="assets/images/youtube.png" alt="YouTube" class="platform-logo">
              </div>
            </button>
          </div>
          <img src="assets/images/phone.png" alt="Phone" class="phone-image">
          <div class="phone-border"></div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./startups-section.component.scss']
})
export class StartupsSectionComponent {}
