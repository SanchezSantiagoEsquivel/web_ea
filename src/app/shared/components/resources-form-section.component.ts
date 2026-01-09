import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resources-form-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="resources-form-section">
      <div class="form-container">
        <div class="content-section">
          <div class="text-content">
            <h2 class="section-title">Obtén una muestra <span class="gratis-highlight">GRATIS</span></h2>
            <p class="section-description">
              Lee un fragmento del ebook y descubre por qué tantos emprendedores han encontrado en esta guía el punto de partida para materializar sus ideas y crear negocios reales desde cero.
            </p>
          </div>
          
          <div class="form-wrapper">
            <form class="contact-form" (ngSubmit)="onSubmit()">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">NOMBRE *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    [(ngModel)]="formData.name"
                    required>
                </div>
                <div class="form-group">
                  <label for="email">EMAIL *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    [(ngModel)]="formData.email"
                    required>
                </div>
              </div>
              
              <div class="checkbox-section">
                <div class="checkbox-container">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    name="privacy" 
                    [(ngModel)]="formData.acceptPrivacy"
                    required>
                  <label for="privacy" class="checkbox-label">
                    Al contactar con Eduardo Acevedo, estoy aceptando los Términos de Privacidad
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  class="submit-btn"
                  [disabled]="!isFormValid()">
                  QUIERO MI EBOOK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./resources-form-section.component.scss']
})
export class ResourcesFormSectionComponent {
  formData = {
    name: '',
    email: '',
    acceptPrivacy: false
  };

  isFormValid(): boolean {
    return this.formData.name.trim() !== '' && 
           this.formData.email.trim() !== '' && 
           this.formData.acceptPrivacy;
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.formData);
      // Aquí iría la lógica de envío del formulario
      alert('¡Gracias! Te enviaremos el ebook a tu email.');
    }
  }
}