import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero.component';
import { AboutSectionComponent } from '../../shared/components/about-section.component';
import { TestimonialsSectionComponent } from '../../shared/components/testimonials-section.component';
import { NewsletterSectionComponent } from '../../shared/components/newsletter-section.component';
import { FooterComponent } from '../../shared/components/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutSectionComponent,
    TestimonialsSectionComponent,
    NewsletterSectionComponent,
    FooterComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-about-section></app-about-section>
    <app-testimonials-section></app-testimonials-section>
    <app-newsletter-section></app-newsletter-section>
    <app-footer></app-footer>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}