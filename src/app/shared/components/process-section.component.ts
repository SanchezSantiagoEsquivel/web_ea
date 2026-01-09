import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- <section class="process-section">
      <div class="content-container">
        <div class="main-content">
          <div class="text-section">
            <div class="title-header">
              <span class="process-label">EL PASO A PASO QUE NADIE TE CUENTA</span>
              <h2 class="section-title">
                De una idea a un negocio rentable
              </h2>
            </div>
            
            <div class="divider-line"></div>
            
            <div class="description-content">
              <p class="description-text">
                Existe la falsa idea de que emprender es solo para quienes estudiaron una carrera, tuvieron contactos o recibieron una gran herencia. Eduardo desmonta ese mito compartiendo el mismo proceso con el que creó tres empresas millonarias desde cero, en tres industrias distintas. Aquí comienza el camino para transformar esa idea que llevas tiempo soñando en tu primer proyecto real.
              </p>
            </div>
          </div>
          

        </div>
      </div>
    </section> -->
  `,
  styleUrls: ['./process-section.component.scss']
})
export class ProcessSectionComponent {}