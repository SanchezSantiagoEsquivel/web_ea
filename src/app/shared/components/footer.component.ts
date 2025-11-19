import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <!-- Header Nav Section -->
      <div class="header-nav">
        <!-- Links Section -->
        <div class="links-section">
          <!-- Left Column -->
          <div class="left-column">
            <!-- Brand Section -->
            <div class="brand-section">
              <!-- Logo -->
              <div class="footer-logo">
                <img src="assets/images/footer-logo.png" alt="EA Logo" class="logo-img">
              </div>
              
              <!-- Brand Text -->
              <p class="brand-text">La rentabilidad más alta proviene de quienes apuestan por su <span class="italic-text">propio crecimiento</span>.</p>
            </div>
            
            <!-- Social Icons -->
            <div class="social-icons">
              <img src="assets/images/social-icon-1.svg" alt="Social 1" class="social-icon">
              <img src="assets/images/social-icon-2.svg" alt="Social 2" class="social-icon">
              <img src="assets/images/social-icon-3.svg" alt="Social 3" class="social-icon">
              <img src="assets/images/social-icon-4.svg" alt="Social 4" class="social-icon">
            </div>
          </div>
          
          <!-- Right Columns -->
          <div class="right-columns">
            <!-- Column 1 - Enlaces rápidos -->
            <div class="footer-column">
              <!-- Column Header -->
              <div class="column-header">
                <span class="header-link">Enlaces rápidos</span>
              </div>
              
              <!-- Column Links -->
              <div class="column-links">
                <a href="#" class="footer-link">Home</a>
                <a href="#" class="footer-link">Sobre Eduardo</a>
                <a href="#" class="footer-link">Shop</a>
                <a href="#" class="footer-link">Club de Inversión</a>
                <a href="#" class="footer-link">Empresas</a>
                <a href="#" class="footer-link">Contacto</a>
              </div>
            </div>
            
            <!-- Column 2 - Legal -->
            <div class="footer-column">
              <!-- Column Header -->
              <div class="column-header">
                <span class="header-link">Legal</span>
              </div>
              
              <!-- Column Links -->
              <div class="column-links">
                <a href="#" class="footer-link">Términos y Condiciones</a>
                <a href="#" class="footer-link">Política de Privacidad</a>
                <a href="#" class="footer-link">Política de Cookie</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Copyright Section -->
      <div class="copyright-section">
        <p class="copyright-text">© 2025 Eduardo Acevedo.  Todos los derechos reservados.</p>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}