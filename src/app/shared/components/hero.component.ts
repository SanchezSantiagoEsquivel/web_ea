import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <!-- Background Video -->
      <div class="hero-video">
        <video autoplay muted loop class="bg-video">
          <source src="/assets/videos/ea-intro-hero-section.mp4" type="video/mp4">
        </video>
      </div>
      
      <!-- White Background Overlay -->
      <div class="hero-white-bg">
        <!-- Header Navigation -->
        <div class="header-nav">
          <!-- Navigation Component -->
          <div class="nav-component">
            <!-- Left Navigation -->
            <div class="nav-left">
              <!-- Menu Button -->
              <div class="menu-container">
                <button class="menu-btn" (click)="toggleMobileMenu()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none" class="menu-icon">
                    <path d="M0.75 0.75L16.75 0.750001" stroke="#F2F2F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.75 10.0834L22.0833 10.0834" stroke="#F2F2F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.75 19.4167L11.4167 19.4167" stroke="#F2F2F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <!-- Navigation Links -->
              <div class="nav-links">
                <div class="nav-link">
                  <a routerLink="/sobre-eduardo" class="link-text">SOBRE EDUARDO</a>
                </div>
                <div class="nav-link">
                  <a routerLink="/club-inversion" class="link-text">CLUB INVERSIÓN</a>
                </div>
                <div class="nav-link">
                  <a routerLink="/recursos" class="link-text">RECURSOS</a>
                </div>
              </div>
            </div>
            
            <!-- Right Actions -->
            <div class="nav-actions">
              <!-- Language Button -->
              <div class="language-frame">
                <span class="language-text">ESP</span>
              </div>
              
              <!-- Mode Toggle -->
              <div class="mode-frame">
                <span class="mode-text">MODO</span>
                <div class="mode-icon-frame">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mode-icon">
                    <circle cx="9" cy="9" r="8" fill="#F2F2F0"/>
                    <path d="M9 1 A8 8 0 0 1 9 17 Z" fill="#343434"/>
                  </svg>
                </div>
              </div>
              
              <!-- Contact Button -->
              <button class="contact-button">HABLEMOS</button>
            </div>
            
            <!-- Logo -->
            <div class="logo-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="51" viewBox="0 0 80 51" fill="none" class="logo-img">
                <path d="M79.5694 50.4903C76.1672 50.4903 72.8478 47.4285 71.5443 43.4229L67.3792 30.7244L66.1261 26.896L57.3071 0C57.0924 0.0756019 56.0075 0.221592 52.754 0.221592C52.2329 0.221592 51.6536 0.221592 51.0122 0.213771L41.4677 29.2605L41.244 29.9397L41.1496 30.2316L40.8289 31.2066L39.4155 35.5238L39.3534 35.7128L39.2513 36.0282C35.7353 44.4409 29.4533 50.0289 22.8882 50.0289C14.2165 50.0289 9.88718 40.7286 8.87725 33.2466C8.55268 30.8351 8.48544 28.326 8.67811 25.8076H29.8529L31.6025 24.4025H8.8126C9.64666 17.1225 12.6764 9.93644 18.0118 5.13441C19.6593 3.65105 21.586 2.41144 23.6731 1.67758C24.8822 1.30218 26.3395 1.02193 28.0503 0.978914C28.2029 0.975004 28.3594 0.971093 28.5197 0.971093C34.6659 0.971093 41.9397 7.96297 41.9397 7.96297L41.7328 6.21891L41.0048 0.0664775H23.5373C10.3695 1.00238 0 12.0429 0 25.4479C0 30.6292 1.5776 35.7467 4.50522 40.0051C5.1673 40.9645 5.8992 41.8756 6.68542 42.7281C11.0419 47.4363 17.3213 50.6285 23.7378 50.9752C25.9141 51.0939 28.0981 50.798 30.1464 50.0406C32.0564 49.3342 33.8073 48.2536 35.3926 46.9749C37.0207 45.6609 38.4858 44.1489 39.8629 42.5743C41.2724 40.9645 42.5992 39.283 43.9466 37.6185C45.4531 35.7597 46.9337 33.9127 48.8747 32.488C49.873 31.7502 50.9411 31.1102 52.0454 30.5432C53.3062 29.8966 54.6252 29.3401 55.9997 28.9998C57.4325 28.6414 58.9157 28.6166 60.3808 28.6362C60.7015 28.6401 61.0183 28.6479 61.3403 28.6479L61.352 28.6753L62.4123 31.5482L65.305 39.369C67.0468 44.0733 66.4093 46.4952 66.1236 47.2212C66.1236 47.2251 66.1158 47.229 66.1158 47.2329C66.1119 47.2447 66.108 47.2564 66.1003 47.2642C66.0615 47.3672 66.0292 47.4259 66.0175 47.4493C66.0098 47.4611 66.0098 47.465 66.0059 47.4689C65.133 49.1699 63.1054 50.4877 61.136 50.4877V50.9974C65.8378 50.7015 68.221 50.6298 70.5357 50.6298C72.8503 50.6298 75.3034 50.7015 80.0013 50.9974V50.4877H79.5707L79.5694 50.4903ZM41.6216 33.2766L51.3613 3.61455C52.273 4.72382 53.0294 6.05728 53.5493 7.57974L58.6351 21.3315L60.3226 25.8937L60.9175 27.5074C57.6174 27.278 48.9704 27.3614 41.6216 33.2766Z" fill="#F2F2F0"/>
              </svg>
            </div>
          </div>

          <!-- Main Content Frame -->
          <div class="main-content-frame">
            <!-- Text Content -->
            <div class="text-content">
              <p class="subtitle">ESTRATEGIA Y PROPÓSITO PARA QUIENES PIENSAN EN GRANDE</p>
              <h1 class="main-title">
                Haz de tu <span class="highlight">vida</span> tu<br>
                mejor <span class="highlight">inversión</span>
              </h1>
            </div>
            <!-- CTA Button -->
            <button class="cta-button" (click)="onStartToday()">EMPIEZA HOY</button>
          </div>
        </div>
      </div>

      <!-- Mobile Sidebar -->
      @if (isMobileMenuOpen()) {
        <div class="sidebar-overlay" (click)="closeMobileMenu()">
          <div class="sidebar" (click)="$event.stopPropagation()">
            <!-- Close Menu Button -->
            <div class="menu-close">
              <button class="menu-close-btn" (click)="closeMobileMenu()">
                <img src="assets/images/close-icon.svg" alt="Close" class="close-icon">
              </button>
            </div>
            
            <!-- Navigation Frame -->
            <div class="nav-frame">
              <div class="nav-item">
                <a routerLink="/" class="nav-text" (click)="closeMobileMenu()">Home</a>
              </div>
              <div class="nav-item">
                <a routerLink="/sobre-eduardo" class="nav-text" (click)="closeMobileMenu()">Sobre eduardo</a>
              </div>
              <div class="nav-item">
                <a routerLink="/recursos" class="nav-text" (click)="closeMobileMenu()">recursos</a>
              </div>
              <div class="nav-item">
                <a routerLink="/club-inversion" class="nav-text" (click)="closeMobileMenu()">CLUB DE INVERSIÓN</a>
              </div>
              <div class="nav-item">
                <a routerLink="/empresas" class="nav-text" (click)="closeMobileMenu()">EMPRESAS</a>
              </div>
              <div class="nav-item">
                <a routerLink="/contacto" class="nav-text" (click)="closeMobileMenu()">CONTACTO</a>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  isMobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  onStartToday(): void {
    alert('¡Bienvenido! Funcionalidad "Empieza Hoy" activada');
    // Aquí iría la lógica real del prototipo
  }

  onContactUs(): void {
    alert('Contacto activado. Te contactaremos pronto.');
    // Aquí iría la lógica real del prototipo
  }
}