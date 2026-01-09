import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer.component';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent],
  template: `
    <div class="investment-container">
      <!-- Hero Section with Video Background -->
      <section class="hero-section">
        <video class="hero-video" autoplay muted loop playsinline>
          <source src="assets/videos/Investors-Club.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay">
          <nav class="navigation">
            <div class="nav-left">
              <div class="menu-container">
                <button class="menu-btn" (click)="toggleMobileMenu()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none" class="menu-icon">
                    <path d="M0.75 0.75L16.75 0.750001" stroke="#F2F2F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.75 10.0834L22.0833 10.0834" stroke="#F2F2F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.75 19.4167L11.4167 19.4167" stroke="#F2F2F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div class="nav-links">
                <div class="nav-link">
                  <a routerLink="/sobre-eduardo" class="link-text">SOBRE EDUARDO</a>
                </div>
                <div class="nav-link">
                  <a routerLink="/club-inversion" class="link-text active">CLUB INVERSIÓN</a>
                </div>
                <div class="nav-link">
                  <a routerLink="/recursos" class="link-text">RECURSOS</a>
                </div>
              </div>
            </div>
            
            <div class="nav-actions">
              <div class="language-frame">
                <span class="language-text">ESP</span>
              </div>
              
              <div class="mode-frame">
                <span class="mode-text">MODO</span>
                <div class="mode-icon-frame">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mode-icon">
                    <circle cx="9" cy="9" r="8" fill="#F2F2F0"/>
                    <path d="M9 1 A8 8 0 0 1 9 17 Z" fill="#343434"/>
                  </svg>
                </div>
              </div>
              
              <button class="contact-button" (click)="onContactUs()">HABLEMOS</button>
            </div>
            
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
          </nav>
          <div class="hero-content">
            <p class="hero-subtitle">OPORTUNIDADES DE INVERSIÓN</p>
            <h1 class="hero-title">Liviind Club,</h1>
            <h1 class="hero-title">mi plataforma <em>de Inversión</em></h1>
          </div>
        </div>
      </section>

      <!-- Properties Section -->
      <section class="properties-section">
        <div class="section-container">
          <div class="section-header">
            <div class="header-left">
              <p class="section-subtitle">PROPIEDADES DESTACADAS</p>
              <h2>Prestigiosas villas para invertir</h2>
            </div>
            <div class="header-divider"></div>
            <div class="header-right">
              <p class="section-description">Explora proyectos inmobiliarios seleccionados por su valor estratégico, su potencial de rentabilidad y su conexión con un estilo de vida de alto nivel.</p>
            </div>
          </div>
          <!-- Properties Grid -->
          <div class="properties-grid">
            @for (property of properties.slice(0, 3); track property.name; let i = $index) {
              <div class="property-card">
                <div class="property-image">
                  <img [src]="property.image" [alt]="property.name">
                  <div class="property-hover-overlay">
                    <div class="property-price">Starting at {{ property.price }}</div>
                    <div class="property-details">
                      <div class="detail-item">{{ property.persons }}</div>
                      <div class="detail-item">{{ property.rooms }}</div>
                      <div class="detail-item">{{ property.bathrooms }}</div>
                    </div>
                  </div>
                </div>
                <div class="property-price-tag">Starting at {{ property.price }}</div>
                <div class="property-info">
                  <p class="property-location">{{ property.location }}</p>
                  <div class="property-title-row">
                    <h3 class="property-name">{{ property.name }}</h3>
                    <button class="property-arrow-btn">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <div class="property-hover-info">
                    <div class="property-details-list">
                      <div class="detail-item">{{ property.persons }}</div>
                      <div class="detail-item">{{ property.rooms }}</div>
                      <div class="detail-item">{{ property.bathrooms }}</div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
          
          <div class="discover-section">
            <button class="discover-btn" (click)="onDiscoverVillas()">DESCUBRE TODAS LAS VILLAS</button>
          </div>
        </div>
      </section>

      <!-- Destinations Section -->
      <section class="destinations-section">
        <div class="section-container">
          <div class="section-header">
            <div class="header-center">
              <p class="section-subtitle">DESTINOS ESTRATÉGICOS</p>
              <h2>Elige dónde quieres hacer crecer<br>tu inversión</h2>
              <div class="region-tabs">
                <button class="tab-btn" 
                        [class.active]="currentRegion() === 'EUROPA'"
                        (click)="selectRegion('EUROPA')">EUROPA</button>
                <button class="tab-btn" 
                        [class.active]="currentRegion() === 'LATAM'"
                        (click)="selectRegion('LATAM')">LATAM</button>
              </div>
            </div>
          </div>
          <div class="destinations-content">
            <div class="countries-list">
              <h3>ESPAÑA</h3>
              <p>UK</p>
              <p>FRANCIA</p>
              <p>BÉLGICA</p>
              <p>GRECIA</p>
              <p>ITALIA</p>
            </div>
            <div class="destinations-wrapper">
              <!-- Flechas de navegación -->
              <div class="destinations-nav">
                <button class="nav-arrow prev" (click)="prevDestination()">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8L10 4" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button class="nav-arrow next" (click)="nextDestination()">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <!-- Grid de destinos -->
              <div class="destinations-grid" 
                   [style.transform]="'translateX(-' + (currentDestinationIndex() * 33.33) + '%)'">
                @for (destination of destinations; track destination.name; let i = $index) {
                  <div class="destination-item">
                    <div class="destination-image">
                      <img [src]="destination.image" [alt]="destination.name">
                    </div>
                    <div class="destination-content">
                      <h4>{{ destination.name }},</h4>
                      <p>{{ destination.properties }} propiedades</p>
                      <button class="add-btn" (click)="onContactUs()">+</button>
                    </div>
                  </div>
                }
              </div>
            </div>
            

          </div>
        </div>
      </section>

      <!-- Club Model Section -->
      <section class="club-model-section">
        <div class="section-container">
          <div class="section-header">
            <div class="header-left">
              <p class="section-subtitle">MODELO DEL CLUB</p>
              <h2>3 pasos para invertir con<br>claridad y propósito</h2>
            </div>
            <div class="header-divider"></div>
            <div class="header-right">
              <p class="section-description">Te guiamos desde la selección de propiedades hasta la gestión y optimización de cada proyecto, para ayudarte a construir un crecimiento real y sostenible.</p>
            </div>
          </div>
          <div class="steps-grid">
            <div class="step-item">
              <div class="step-number">01</div>
              <h3>COMPRA UNA PROPIEDAD</h3>
              <p>Tu participación puede ser vía equity o vía deuda según tu estrategia. Cada oportunidad ha sido analizada previamente para garantizar seguridad y proyección. Te elegimos cómo invertir y nosotros te guiamos durante el proceso.</p>
            </div>
            <div class="step-item">
              <div class="step-number">02</div>
              <h3>RENOVACIÓN Y GESTIÓN</h3>
              <p>Optimizamos la propiedad para aumentar su valor y rendimiento: reformas estratégicas, puesta a punto y gestión operativa del alquiler. Nos encargamos de todo para que tu inversión funcione sin complicaciones.</p>
            </div>
            <div class="step-item">
              <div class="step-number">03</div>
              <h3>ALTAS RENTABILIDADES</h3>
              <p>Al recuperar tu inversión, recibirás tu capital junto a los beneficios generados. Seleccionamos proyectos con retornos sólidos y un riesgo controlado, pensados para hacer crecer tu patrimonio de forma estable.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="cta-content">
          <div class="cta-image">
            <img src="assets/images/club-inversion/20240806_141647_9695jpg.jpg" alt="Investment meeting">
          </div>
          <div class="cta-text">
            <div class="ea-logo">EA</div>
            <h2>¿Necesitas asesoría?</h2>
            <p>Con una trayectoria que combina liderazgo, visión y estrategia, Eduardo Acevedo se ha consolidado como u</p>
            <button class="contact-cta-btn" (click)="onContactAdvice()">CONTÁCTANOS</button>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <app-footer></app-footer>
      
      <!-- Mobile Menu -->
      @if (isMobileMenuOpen()) {
        <div class="mobile-menu-overlay" (click)="toggleMobileMenu()">
          <div class="mobile-menu" (click)="$event.stopPropagation()">
            <div class="mobile-menu-header">
              <button class="close-btn" (click)="toggleMobileMenu()">
                <img src="assets/images/close-icon.svg" alt="Close" width="32" height="32">
              </button>
            </div>
            <nav class="mobile-nav">
              <a routerLink="/" (click)="toggleMobileMenu()">Home</a>
              <a routerLink="/sobre-eduardo" (click)="toggleMobileMenu()">Sobre eduardo</a>
              <a routerLink="/recursos" (click)="toggleMobileMenu()">recursos</a>
              <a routerLink="/club-inversion" (click)="toggleMobileMenu()">CLUB DE INVERSIÓN</a>
              <a href="#" (click)="toggleMobileMenu()">EMPRESAS</a>
              <a href="#" (click)="toggleMobileMenu()">CONTACTO</a>
            </nav>
          </div>
        </div>
      }
    </div>
  `,
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit, OnDestroy {
  currentRegion = signal('EUROPA');
  currentPropertyIndex = signal(0);
  currentDestinationIndex = signal(0);
  isMobileMenuOpen = signal(false);
  
  private propertyInterval?: number;
  private destinationInterval?: number;

  properties = [
    {
      image: 'assets/images/club-inversion/carrusel.jpg',
      location: 'ISLAS CANARIAS, ESPAÑA',
      name: 'Villa Solaris Privé',
      price: '800.000 €',
      persons: 'X personas',
      rooms: 'X habitaciones',
      bathrooms: 'X baños'
    },
    {
      image: 'assets/images/club-inversion/carrusel.jpg',
      location: 'ISLAS CANARIAS, ESPAÑA',
      name: 'Villa Solaris Privé',
      price: '750.000 €',
      persons: 'X personas',
      rooms: 'X habitaciones',
      bathrooms: 'X baños'
    },
    {
      image: 'assets/images/club-inversion/carrusel.jpg',
      location: 'ISLAS CANARIAS, ESPAÑA',
      name: 'Villa Solaris Privé',
      price: '920.000 €',
      persons: 'X personas',
      rooms: 'X habitaciones',
      bathrooms: 'X baños'
    },
    {
      image: 'assets/images/club-inversion/carrusel.jpg',
      location: 'ISLAS CANARIAS, ESPAÑA',
      name: 'Villa Solaris Privé',
      price: '680.000 €',
      persons: 'X personas',
      rooms: 'X habitaciones',
      bathrooms: 'X baños'
    },
    {
      image: 'assets/images/club-inversion/carrusel.jpg',
      location: 'ISLAS CANARIAS, ESPAÑA',
      name: 'Villa Solaris Privé',
      price: '1.100.000 €',
      persons: 'X personas',
      rooms: 'X habitaciones',
      bathrooms: 'X baños'
    },
    {
      image: 'assets/images/club-inversion/carrusel.jpg',
      location: 'ISLAS CANARIAS, ESPAÑA',
      name: 'Villa Solaris Privé',
      price: '850.000 €',
      persons: 'X personas',
      rooms: 'X habitaciones',
      bathrooms: 'X baños'
    }
  ];

  destinations = [
    {
      image: 'assets/images/club-inversion/tenerife.jpg',
      name: 'Tenerife',
      properties: 245
    },
    {
      image: 'assets/images/club-inversion/mallorca.jpg',
      name: 'Mallorca',
      properties: 186
    },
    {
      image: 'assets/images/club-inversion/malaga.jpg',
      name: 'Málaga',
      properties: 156
    },
    {
      image: 'assets/images/club-inversion/lanzarote.jpg',
      name: 'Lanzarote',
      properties: 245
    }
  ];

  ngOnInit() {
    // Removed destination slider auto-play
  }

  ngOnDestroy() {
    // No intervals to clear since destination slider is disabled
  }

  startPropertySlider() {
    this.propertyInterval = window.setInterval(() => {
      this.nextProperty();
    }, 4000);
  }

  startDestinationSlider() {
    this.destinationInterval = window.setInterval(() => {
      this.nextDestination();
    }, 3000);
  }

  nextProperty() {
    this.currentPropertyIndex.update(index => {
      const maxIndex = this.properties.length - 3;
      return index >= maxIndex ? 0 : index + 1;
    });
  }

  prevProperty() {
    this.currentPropertyIndex.update(index => {
      const maxIndex = this.properties.length - 3;
      return index === 0 ? maxIndex : index - 1;
    });
  }

  nextDestination() {
    this.currentDestinationIndex.update(index => {
      const maxIndex = this.destinations.length - 3;
      return index >= maxIndex ? 0 : index + 1;
    });
  }

  prevDestination() {
    this.currentDestinationIndex.update(index => {
      const maxIndex = this.destinations.length - 3;
      return index === 0 ? maxIndex : index - 1;
    });
  }

  selectRegion(region: string) {
    this.currentRegion.set(region);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  onContactUs() {
    alert('Funcionalidad de contacto activada');
  }

  onDiscoverVillas() {
    alert('Navegando a todas las villas...');
  }

  onContactAdvice() {
    alert('Solicitando asesoría personalizada...');
  }
}