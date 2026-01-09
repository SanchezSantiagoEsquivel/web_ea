import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="contact-page">
      <div class="contact-container">
        <div class="contact-info">
          <div class="info-header">
            <span class="info-label">INFO</span>
            <h1>Eduardo Acevedo</h1>
          </div>
          
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M29.3333 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9794 28.7431 28.2848 28.4695 28.5358C28.1959 28.7868 27.8728 28.978 27.5211 29.0969C27.1693 29.2159 26.7966 29.2596 26.4267 29.2253C22.3239 28.7573 18.3827 27.3288 14.9200 25.0533C11.7676 23.0696 9.03035 20.3324 7.04667 17.18C4.76 13.7073 3.33152 9.75208 2.87333 5.63467C2.83911 5.26577 2.88244 4.89403 3.00072 4.54318C3.11899 4.19233 3.30943 3.87016 3.55901 3.59707C3.80859 3.32399 4.11267 3.10666 4.45130 2.95898C4.78994 2.81131 5.15634 2.73635 5.52667 2.73867H9.52667C10.1943 2.73258 10.8419 2.982 11.3425 3.43684C11.8431 3.89168 12.1607 4.51484 12.24 5.18C12.3886 6.50369 12.6914 7.80715 13.1413 9.06C13.3316 9.58 13.1816 10.1573 12.7467 10.5573L10.9067 12.3973C12.8253 15.7573 15.5093 18.4413 18.8693 20.36L20.7093 18.52C21.1093 18.0851 21.6867 17.9351 22.2067 18.1253C23.4595 18.5753 24.763 18.878 26.0867 19.0267C26.7583 19.1063 27.3866 19.4288 27.8442 19.9361C28.3017 20.4435 28.5502 21.0988 28.5333 21.7733L29.3333 22.56Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">TELÉFONO</span>
                <span class="contact-value">(000) 000-0000</span>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M5.33333 5.33334H26.6667C28.1333 5.33334 29.3333 6.53334 29.3333 8.00001V24C29.3333 25.4667 28.1333 26.6667 26.6667 26.6667H5.33333C3.86667 26.6667 2.66667 25.4667 2.66667 24V8.00001C2.66667 6.53334 3.86667 5.33334 5.33333 5.33334Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M29.3333 8L16 17.3333L2.66667 8" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">EMAIL</span>
                <span class="contact-value">eduardo&#64;eduardoacevedo.es</span>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M28 13.3333C28 22.6667 16 30.6667 16 30.6667C16 30.6667 4 22.6667 4 13.3333C4 10.1507 5.26428 7.09839 7.51472 4.84795C9.76516 2.59751 12.8175 1.33334 16 1.33334C19.1825 1.33334 22.2348 2.59751 24.4853 4.84795C26.7357 7.09839 28 10.1507 28 13.3333Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 17.3333C18.2091 17.3333 20 15.5425 20 13.3333C20 11.1242 18.2091 9.33334 16 9.33334C13.7909 9.33334 12 11.1242 12 13.3333C12 15.5425 13.7909 17.3333 16 17.3333Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">UBICACIÓN</span>
                <span class="contact-value">MADRID - MIAMI</span>
              </div>
            </div>
          </div>
          
          <div class="social-icons">
            <a href="#" class="social-link">
              <img src="/assets/images/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="#" class="social-link">
              <img src="/assets/images/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" class="social-link">
              <img src="/assets/images/tiktok.svg" alt="TikTok" />
            </a>
          </div>
          
          <div class="decorative-image">
            <img src="/assets/images/ea_contact.png" alt="" />
          </div>
        </div>
        
        <div class="divider-line"></div>
        
        <div class="contact-form-section">
          <h2>Agenda una llamada</h2>
          
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
            
            <div class="form-group full-width">
              <label>TELÉFONO *</label>
              <input type="tel" formControlName="phone" />
            </div>
            
            <div class="form-group full-width">
              <label>MENSAJE *</label>
              <textarea formControlName="message" rows="4"></textarea>
            </div>
            
            <div class="form-checkbox">
              <input type="checkbox" id="privacy" formControlName="privacy" />
              <label for="privacy">Al contactar con Eduardo Acevedo, estoy aceptando los Términos de Privacidad</label>
            </div>
            
            <button type="submit" class="submit-btn" [disabled]="!contactForm.valid">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
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