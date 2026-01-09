import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section">
      <div class="gradient-overlay"></div>
      
      <div class="content-container">
        <div class="books-image">
          <img src="/assets/images/ea-books.png" alt="EA Books" class="books-img">
        </div>
        
        <div class="text-content">
          <div class="header-section">
            <div class="title-section">
              <span class="testimonials-label">TESTIMONIOS</span>
              <h2 class="section-title">
                Lo que dicen quienes han trabajado <span class="eduardo-highlight">con Eduardo</span>
              </h2>
            </div>
            
            <div class="testimonial-content">
              <div class="testimonial-section">
                <div class="divider-line"></div>
                <div class="testimonial-text">
                  <p class="testimonial-quote">
                    Trabajar con Eduardo ha sido un aprendizaje constante. Su manera de ver los negocios es clara y directa, pero siempre con un toque humano que lo hace diferente. Con él aprendí que no basta con tener una buena idea: hay que tener visión y acción. Eso es lo que lo convierte en un verdadero <span class="highlight">líder</span>.
                  </p>
                </div>
              </div>
              
              <div class="stats-section">
                <div class="stats-container">
                  <div class="stat-item">
                    <span class="stat-number">160<span class="plus-highlight">+</span></span>
                    <span class="stat-label">Páginas</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">10<span class="plus-highlight">+</span></span>
                    <span class="stat-label">Capítulos</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">8<span class="plus-highlight">+</span></span>
                    <span class="stat-label">Ejercicios<br>prácticos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent {}