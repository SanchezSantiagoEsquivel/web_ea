import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="about-hero">
      <div class="hero-content">
        <div class="scroll-indicator">
          <span class="scroll-text">SCROLL</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-arrow">
            <path d="M7 4L17 16" stroke="#FFFF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        
        <div class="text-content">
          <div class="text-container">
            <span class="subtitle">VISIÓN, PROPÓSITO Y ESTRATEGIA</span>
            <h1>Sobre Eduardo Acevedo</h1>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about-hero.component.scss']
})
export class AboutHeroComponent {
  
}