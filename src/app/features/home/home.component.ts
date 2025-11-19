import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero.component';
import { AboutSectionComponent } from '../../shared/components/about-section.component';
import { BrandsSectionComponent } from '../../shared/components/brands-section.component';
import { InvestmentSectionComponent } from '../../shared/components/investment-section.component';
import { NewsletterSectionComponent } from '../../shared/components/newsletter-section.component';
import { FooterComponent } from '../../shared/components/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutSectionComponent,
    BrandsSectionComponent,
    InvestmentSectionComponent,
    NewsletterSectionComponent,
    FooterComponent
  ],
  template: `
    <div class="home-container">
      <app-hero></app-hero>
      <app-about-section></app-about-section>
      <app-brands-section></app-brands-section>
      <app-investment-section></app-investment-section>
      <app-newsletter-section></app-newsletter-section>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}