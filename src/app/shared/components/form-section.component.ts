import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="form-section">
      <div class="form-container">
        <div class="form-content">
          <div class="text-content">
            <h2>Hablemos de tu próximo <span class="highlight">gran paso</span></h2>
            <p>Descubre oportunidades únicas de inversión, colaboración y expansión junto a una red de líderes que comparten tu misma mentalidad de crecimiento.</p>
          </div>
          
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label>NOMBRE *</label>
                <input type="text" formControlName="name" />
              </div>
              <div class="form-group">
                <label>EMAIL *</label>
                <input type="email" formControlName="email" />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>TELÉFONO*</label>
                <input type="tel" formControlName="phone" />
              </div>
              <div class="form-group">
                <label>MOTIVO</label>
                <select formControlName="reason">
                  <option value="">Selecciona una opción</option>
                  <option value="inversion">Inversión</option>
                  <option value="colaboracion">Colaboración</option>
                  <option value="expansion">Expansión</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>
            
            <div class="form-group full-width">
              <label>MENSAJE *</label>
              <textarea formControlName="message" rows="4"></textarea>
            </div>
            
            <div class="form-footer">
              <div class="form-checkbox">
                <input type="checkbox" id="privacy" formControlName="privacy" />
                <label for="privacy">Al contactar con Eduardo Acevedo, estoy aceptando los Términos de Privacidad</label>
              </div>
              
              <button type="submit" class="submit-btn" [disabled]="!contactForm.valid">
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      reason: [''],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
    }
  }
}