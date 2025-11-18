import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <!-- Background Photo with blur -->
      <div class="hero-photo">
        <img src="assets/images/hero-background.png" alt="Hero Background" class="bg-image">
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
                  <img src="assets/images/menu-icon.svg" alt="Menu" class="menu-icon">
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
                <div class="arrow-frame">
                  <img src="assets/images/arrow-down.svg" alt="Arrow" class="arrow-icon">
                </div>
                <div class="mode-icon-frame">
                  <img src="assets/images/mode-toggle.svg" alt="Mode" class="mode-icon">
                </div>
              </div>
              
              <!-- Contact Button -->
              <button class="contact-button">HABLEMOS</button>
            </div>
            
            <!-- Logo -->
            <div class="logo-container">
              <img src="assets/images/logo.svg" alt="EA Logo" class="logo-img">
            </div>
          </div>

          <!-- Main Content Frame -->
          <div class="main-content-frame">
            <!-- Text Content -->
            <div class="text-content">
              <p class="subtitle">ESTRATEGIA Y PROPÓSITO PARA QUIENES PIENSAN EN GRANDE</p>
              <h1 class="main-title">
                Haz de tu vida tu<br>
                mejor inversión
              </h1>
            </div>
            <!-- CTA Button -->
            <button class="cta-button">EMPIEZA HOY</button>
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
                <a routerLink="/club-inversion" class="nav-text" (click)="closeMobileMenu()">CLUB DE INVERSIÓN</a>
              </div>
              <div class="nav-item">
                <a routerLink="/recursos" class="nav-text" (click)="closeMobileMenu()">recursos</a>
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
}