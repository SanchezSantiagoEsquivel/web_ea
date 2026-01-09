import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero.component';
import { AboutSectionComponent } from '../../shared/components/about-section.component';
import { BrandsSectionComponent } from '../../shared/components/brands-section.component';
import { InvestmentSectionComponent } from '../../shared/components/investment-section.component';
import { StartupsSectionComponent } from '../../shared/components/startups-section/startups-section.component';
import { NewsletterSectionComponent } from '../../shared/components/newsletter-section.component';
import { FooterComponent } from '../../shared/components/footer.component';
import { FeaturedGuestComponent } from "../../shared/components/featured-guest/featured-guest.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutSectionComponent,
    BrandsSectionComponent,
    InvestmentSectionComponent,
    StartupsSectionComponent,
    NewsletterSectionComponent,
    FooterComponent,
    FeaturedGuestComponent
],
  template: `
    <div class="home-container">
      <app-hero></app-hero>
      <app-about-section></app-about-section>
      <app-brands-section></app-brands-section>
      <app-investment-section></app-investment-section>
      <app-startups-section></app-startups-section>
      <app-featured-guest></app-featured-guest>
      <app-newsletter-section></app-newsletter-section>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}