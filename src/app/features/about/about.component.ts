import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero.component';
import { FooterComponent } from '../../shared/components/footer.component';
import { NewsletterSectionComponent } from '../../shared/components/newsletter-section.component';
import { FormSectionComponent } from '../../shared/components/form-section.component';
import { AboutEduardoSectionComponent } from '../../shared/components/about-eduardo-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageHeroComponent, FooterComponent, NewsletterSectionComponent, FormSectionComponent, AboutEduardoSectionComponent],
  template: `
    <app-page-hero />
    <app-about-eduardo-section></app-about-eduardo-section>
    <app-form-section></app-form-section>
    <app-newsletter-section></app-newsletter-section>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AboutComponent {
  aboutTitle = 'Sobre <span class="about-highlight">Eduardo Acevedo</span>';
}