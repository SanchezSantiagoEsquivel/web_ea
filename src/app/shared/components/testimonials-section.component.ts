import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section">
      <div class="testimonials-content">
        <div class="testimonials-header">
          <h3 class="testimonials-label">TESTIMONIOS</h3>
          <h2 class="testimonials-title">Lo que dicen quienes han trabajado con Eduardo</h2>
        </div>
        
        <div class="testimonials-container">
          <div class="testimonials-grid" [style.transform]="'translateX(' + translateX() + 'px)'">
            @for (testimonial of testimonials; track $index) {
              <div class="testimonial-card" 
                   [class.testimonial-expanded]="isActive($index)"
                   [class.testimonial-side]="!isActive($index)"
                   [attr.data-index]="$index">
                @if (isActive($index)) {
                  <div class="video-frame-expanded">
                    <div class="video-placeholder-expanded"></div>
                    <div class="testimonial-overlay">
                      <div class="testimonial-content">
                        @if (testimonial.quote) {
                          <div class="testimonial-quote-section">
                            <div class="quote-divider"></div>
                            <div class="testimonial-text">
                              <p>{{ testimonial.quote }}</p>
                            </div>
                          </div>
                        }
                        <button class="play-button">
                          <div class="play-icon"></div>
                          <span>REPRODUCIR VIDEO</span>
                        </button>
                      </div>
                    </div>
                  </div>
                } @else {
                  <div class="video-frame">
                    <div class="video-placeholder"></div>
                    <div class="video-filter"></div>
                  </div>
                }
                <div class="testimonial-cite">
                  <div class="testimonial-name">{{ testimonial.name }}</div>
                  <div class="testimonial-designation">{{ testimonial.designation }}</div>
                </div>
              </div>
            }
          </div>
          
          <div class="slider-controls">
            <div class="slider-navigation">
              <button class="slider-btn prev" (click)="prevSlide()">
                <div class="arrow-icon prev-arrow"></div>
              </button>
              <button class="slider-btn next" (click)="nextSlide()">
                <div class="arrow-icon next-arrow"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent {
  currentSlide = signal(1); // Start with Santiago López expanded
  
  testimonials = [
    { name: 'María Álvarez', designation: 'Chief Executive Officer', quote: 'Eduardo tiene una visión única para los negocios. Su capacidad de liderazgo y su enfoque estratégico han sido fundamentales para nuestro crecimiento.' },
    { name: 'Santiago López', designation: 'Chief Executive Officer', quote: 'Trabajar con Eduardo ha sido un aprendizaje constante. Su manera de ver los negocios es clara y directa, pero siempre con un toque humano que lo hace diferente. Con él aprendí que no basta con tener una buena idea: hay que tener visión y acción. Eso es lo que lo convierte en un verdadero líder.' },
    { name: 'Helena Soto', designation: 'Chief Executive Officer', quote: 'La experiencia de Eduardo en el mundo empresarial es invaluable. Su mentoría ha transformado completamente nuestra forma de abordar los desafíos del mercado.' },
    { name: 'Juan Gómez', designation: 'Chief Executive Officer', quote: 'Eduardo combina perfectamente la experiencia práctica con una visión innovadora. Su capacidad para identificar oportunidades es excepcional.' },
    { name: 'Vicente Pérez', designation: 'Chief Executive Officer', quote: 'Trabajar con Eduardo significa tener acceso a décadas de experiencia empresarial. Su enfoque pragmático y su visión estratégica son incomparables.' },
    { name: 'Carla Medina', designation: 'Chief Executive Officer', quote: 'Eduardo no solo es un excelente mentor, sino también un visionario que entiende las tendencias del mercado como pocos. Su guía ha sido clave para nuestro éxito.' }
  ];

  translateX = computed(() => {
    const current = this.currentSlide();
    const cardWidth = 256; // 232px + 24px gap
    const expandedWidth = 844;
    const containerWidth = 1356;
    
    // Calculate the position to center the active card
    let offset = (containerWidth / 2) - (expandedWidth / 2);
    
    // Adjust for the position of the current slide
    for (let i = 0; i < current; i++) {
      offset -= (i === current - 1) ? expandedWidth + 24 : cardWidth;
    }
    
    return offset;
  });

  nextSlide() {
    this.currentSlide.update(current => 
      current >= this.testimonials.length - 1 ? 0 : current + 1
    );
  }

  prevSlide() {
    this.currentSlide.update(current => 
      current <= 0 ? this.testimonials.length - 1 : current - 1
    );
  }

  isActive(index: number): boolean {
    return index === this.currentSlide();
  }
}