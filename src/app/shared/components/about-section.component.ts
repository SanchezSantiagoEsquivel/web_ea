import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section class="about-section">
      <!-- Background Image -->
      <div class="about-background">
        <img src="assets/images/eduardo-photo.png" alt="Eduardo Acevedo" class="eduardo-photo">
      </div>
      
      <!-- Background Overlay -->
      <div class="background-overlay"></div>
      
      <!-- Typography Background -->
      <div class="typography-background">
        <!-- EDUARDO texts with different opacities -->
        <div class="eduardo-text eduardo-1">EDUARDO</div>
        <div class="eduardo-text eduardo-2">EDUARDO</div>
        <div class="eduardo-text eduardo-3">EDUARDO</div>
        
        <!-- ACEVEDO texts with different opacities -->
        <div class="acevedo-text acevedo-1">ACEVEDO</div>
        <div class="acevedo-text acevedo-2">ACEVEDO</div>
        <div class="acevedo-text acevedo-3">ACEVEDO</div>
      </div>
      
      <!-- Content Card -->
      <div class="content-card">
        <!-- Card Content -->
        <div class="card-content">
              <!-- Content placeholder -->
          <div class="content-placeholder">
            <p>About Section - Content coming soon...</p>
          </div>
        </div>
        
        <!-- Action Section -->
        <div class="action-section">
          <!-- Divider Line -->
          <img src="assets/images/divider-line.svg" alt="Divider" class="divider-line">
          
          <!-- CTA Button -->
          <button class="cta-button">CONOCER MÁS</button>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {}