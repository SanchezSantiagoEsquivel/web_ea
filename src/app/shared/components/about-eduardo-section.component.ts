import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-eduardo-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-eduardo-section">
      <div class="content-container">
        <div class="image-container">
          <img src="/assets/images/eduardo-ebook-4f482e.png" alt="Eduardo Acevedo" class="eduardo-image" />
        </div>
        
        <div class="divider-line"></div>
        
        <div class="text-content">
          <div class="header-section">
            <span class="section-label">CONOCE A EDUARDO</span>
            <h2>Convierte tus ideas en<br><span class="highlight">negocios reales</span></h2>
          </div>
          
          <div class="description-section">
            <div class="description-text">
              <p>Con una trayectoria que combina liderazgo, visión y estrategia, Eduardo Acevedo se ha consolidado como una de las voces más influyentes en el mundo del real estate, la inversión y el desarrollo de marcas con propósito.</p>
              
              <p>Su carrera comenzó impulsando proyectos empresariales que hoy forman parte de Liviind Group, un ecosistema que integra compañías especializadas en turismo, inversión inmobiliaria, diseño y experiencias de lujo, entre ellas HomeForGuest, Liviind Travel, Hoblis y Sanitesa.</p>
              
              <p>Su enfoque se basa en la claridad estratégica y el crecimiento sostenible, ayudando a emprendedores, inversores y empresas a construir proyectos sólidos, rentables y alineados con sus valores.</p>
              
              <p>Más allá de los resultados, Eduardo promueve una filosofía simple pero poderosa: el verdadero éxito está en crear valor que trascienda. Su estilo combina la elegancia del pensamiento a largo plazo con la acción práctica, convirtiendo ideas en negocios reales con impacto positivo.</p>
            </div>
          </div>
          
          <div class="cta-section">
            <button class="contact-btn">CONTACTAR A EDUARDO</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about-eduardo-section.component.scss']
})
export class AboutEduardoSectionComponent {
  
}