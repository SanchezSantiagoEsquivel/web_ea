import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="layout">
      <!-- Header -->
      <header class="header">
        <div class="container">
          <nav class="nav flex--between">
            <div class="nav__brand">
              <img src="assets/images/ea-logo.svg" alt="Eduardo Aguirre" class="nav__logo">
            </div>
            
            <div class="nav__menu" [class.nav__menu--open]="isMenuOpen">
              <a href="#home" class="nav__link nav__link--active">Inicio</a>
              <a href="#about" class="nav__link">Sobre Eduardo</a>
              <a href="#investment" class="nav__link">Club de Inversión</a>
              <a href="#resources" class="nav__link">Recursos</a>
              <button class="btn btn--primary">Contacto</button>
            </div>
            
            <button 
              class="nav__mobile-toggle visible-tablet visible-mobile"
              (click)="toggleMenu()"
              [attr.aria-expanded]="isMenuOpen"
              aria-label="Toggle navigation menu">
              <span class="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </nav>
        </div>
      </header>

      <!-- Main Content -->
      <main class="main">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="grid grid--12">
            <div class="col--span-4 col--tablet-span-6 col--mobile-span-12">
              <img src="assets/images/footer-logo.svg" alt="Eduardo Aguirre" class="footer__logo">
              <p class="footer__description body-text">
                Experto en inversiones inmobiliarias con más de 15 años de experiencia 
                ayudando a personas a construir patrimonio.
              </p>
            </div>
            
            <div class="col--span-2 col--tablet-span-3 col--mobile-span-6">
              <h4 class="footer__title">Enlaces</h4>
              <ul class="footer__links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre Eduardo</a></li>
                <li><a href="#investment">Club de Inversión</a></li>
                <li><a href="#resources">Recursos</a></li>
              </ul>
            </div>
            
            <div class="col--span-2 col--tablet-span-3 col--mobile-span-6">
              <h4 class="footer__title">Legal</h4>
              <ul class="footer__links">
                <li><a href="/privacy">Privacidad</a></li>
                <li><a href="/terms">Términos</a></li>
                <li><a href="/cookies">Cookies</a></li>
              </ul>
            </div>
            
            <div class="col--span-4 col--tablet-span-6 col--mobile-span-12">
              <h4 class="footer__title">Newsletter</h4>
              <p class="body-text mb-md">Recibe consejos de inversión semanales</p>
              <form class="newsletter-form">
                <div class="form__group">
                  <input 
                    type="email" 
                    class="form__input" 
                    placeholder="tu@email.com"
                    required>
                  <button type="submit" class="btn btn--primary btn--full-width">
                    Suscribirse
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div class="footer__bottom">
            <p class="caption">© 2024 Eduardo Aguirre. Todos los derechos reservados.</p>
            <div class="footer__social">
              <a href="#" aria-label="LinkedIn">
                <img src="assets/images/social-icon-1.svg" alt="LinkedIn">
              </a>
              <a href="#" aria-label="YouTube">
                <img src="assets/images/social-icon-2.svg" alt="YouTube">
              </a>
              <a href="#" aria-label="Instagram">
                <img src="assets/images/social-icon-3.svg" alt="Instagram">
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}