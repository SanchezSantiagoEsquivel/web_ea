import { Component, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactModalComponent } from './contact-modal.component';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactModalComponent],
  template: `
    <section class="hero">
      <!-- Background Image -->
      <div class="hero-image" [style.background-image]="'url(' + backgroundImage() + ')'">
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
              <button class="contact-button" (click)="onContactUs()">HABLEMOS</button>
            </div>
            
            <!-- Logo -->
            <div class="logo-container">
                    <svg
  width="80"
  height="52"
  viewBox="0 0 80 52"
  xmlns="http://www.w3.org/2000/svg"
  class="logo-imgs"
>
  <g clip-path="url(#clip0_2865_1934)">
    <path
      fill="currentColor"
      d="M79.5635 51.4803C76.1161 51.4803 72.7513 48.3583 71.4288 44.2741L67.2067 31.3263L65.9379 27.4241L56.997 0C56.7794 0.0757572 55.6796 0.224613 52.3817 0.224613C51.8548 0.224613 51.2675 0.224613 50.6161 0.216639L40.9411 29.8337L40.7157 30.5262L40.62 30.8239L40.2949 31.818L38.8622 36.2199L38.7993 36.4126L38.6958 36.7343C37.8097 38.8648 36.7152 40.9129 35.3886 42.7948C34.1919 44.4934 32.8038 46.0644 31.2085 47.3881C29.7745 48.579 28.1675 49.5718 26.4216 50.2151C25.3729 50.6018 24.3636 50.8862 23.2429 50.8849C22.8274 50.8849 22.4118 50.8849 21.9963 50.8849H9.61987C9.00511 50.8849 8.39035 50.8849 7.7769 50.8849H7.75986V26.5389H15.6141C17.5803 26.5389 19.4573 27.3723 20.7917 28.8369L22.9335 31.188V20.8053L20.7812 23.1684C20.561 23.4103 20.3264 23.6336 20.0786 23.8409C19.2738 24.5121 18.2514 24.855 17.208 24.855H7.75855V1.11642H26.1292C26.4648 1.11642 26.7977 1.14034 27.1241 1.18819C27.7756 1.28123 28.4074 1.4673 29.0025 1.7371C30.5663 2.30993 32.0933 3.13794 33.4565 4.00981C36.4871 5.94627 38.7076 8.09273 38.7076 8.09273L38.4965 6.31443L37.7586 0.0412013H0L0.207104 0.233917C1.65028 1.58691 2.47215 3.49015 2.47215 5.48376V46.5176C2.47215 48.5125 1.65028 50.4157 0.207104 51.7674L0 51.9615C0 51.9615 18.3209 51.9561 18.3209 51.9588H22.6884C22.7828 51.9654 37.8542 51.9588 37.8542 51.9588C37.8542 51.9588 38.1531 49.4282 38.1531 49.4269C38.954 42.6327 44.087 36.2119 49.5176 32.4427C50.114 32.0293 50.7288 31.6452 51.3632 31.297C54.0949 29.7992 57.0232 29.1572 60.1114 29.1984C60.4378 29.2024 60.7589 29.2104 61.084 29.2104L61.0958 29.2383L62.172 32.1676L65.1042 40.142C66.8698 44.9386 66.2236 47.4094 65.9339 48.1497C65.9339 48.1537 65.9248 48.1576 65.9248 48.1616C65.9208 48.1736 65.9169 48.1856 65.909 48.1935C65.8697 48.2985 65.8382 48.3583 65.8265 48.3823C65.8186 48.3942 65.8186 48.3982 65.8147 48.4022C64.9299 50.1366 62.8732 51.4803 60.8782 51.4803V52C65.6443 51.6983 68.06 51.6252 70.405 51.6252C72.75 51.6252 75.2392 51.6983 80 52V51.4803H79.5635ZM41.0971 33.9299L50.97 3.68552C51.9046 4.71688 52.8903 7.09991 53.353 8.17912L58.3419 21.7503L60.0524 26.402L60.6554 28.0474C57.3103 27.8148 48.545 27.8986 41.0971 33.9299Z"
    />
  </g>

  <defs>
    <clipPath id="clip0_2865_1934">
      <rect width="80" height="52" />
    </clipPath>
  </defs>
</svg>
            </div>
          </div>

          <!-- Main Content Frame -->
          <div class="main-content-frame">
            <!-- Text Content -->
            <div class="text-content">
              <p class="subtitle">{{ subtitle() }}</p>
              <h1 class="main-title" [innerHTML]="title()">
              </h1>
            </div>
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
                <button class="nav-text" (click)="onContactUs()">CONTACTO</button>
              </div>
            </div>
          </div>
        </div>
      }
      
      @if (showContactModal()) {
        <app-contact-modal (close)="closeContactModal()" />
      }
    </section>
  `,
  styleUrls: ['./page-hero.component.scss']
})
export class PageHeroComponent {
  backgroundImage = input<string>('/assets/images/20250707_074353_5910jpg.jpg');
  subtitle = input<string>('VISIÓN, PROPÓSITO Y ESTRATEGIA');
  title = input<string>('Sobre <span class="about-highlight">Eduardo Acevedo</span>');
  isMobileMenuOpen = signal(false);
  showContactModal = signal(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  onContactUs(): void {
    this.closeMobileMenu();
    this.showContactModal.set(true);
  }

  closeContactModal(): void {
    this.showContactModal.set(false);
  }
}