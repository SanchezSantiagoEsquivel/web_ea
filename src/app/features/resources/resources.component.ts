import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero.component';
import { ProcessSectionComponent } from '../../shared/components/process-section.component';
import { TestimonialsSectionComponent } from '../../shared/components/testimonials-section.component';
import { EbookSectionComponent } from '../../shared/components/ebook-section.component';
import { ResourcesFormSectionComponent } from '../../shared/components/resources-form-section.component';
import { FooterComponent } from '../../shared/components/footer.component';
import { EditorialTestimonialsCarouselComponent } from '../../shared/components/editorial-testimonials-carousel/editorial-testimonials-carousel.component';
import { DataCarouselEditorial, DataEditorialIntro } from '../../../const';
import { EditorialIntroSectionComponent } from '../../shared/components/editorial-intro-section/editorial-intro-section.component';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [PageHeroComponent, ProcessSectionComponent, TestimonialsSectionComponent, EbookSectionComponent, ResourcesFormSectionComponent, FooterComponent, EditorialTestimonialsCarouselComponent,EditorialIntroSectionComponent],
  template: `
    <app-page-hero 
      [backgroundImage]="'/assets/images/Sequence%2001.00_01_45_09.Still002.png'"
      [subtitle]="resourcesSubtitle"
      [title]="resourcesTitle" />
    <app-process-section></app-process-section>
    <main class="resources">
      <app-editorial-intro-section [introData]="dataIntroEditorial"></app-editorial-intro-section>
  </main>
    <app-testimonials-section></app-testimonials-section>
    <app-ebook-section></app-ebook-section>
          <app-editorial-testimonials-carousel [carouselData]="dataEditorial"></app-editorial-testimonials-carousel>

    <app-resources-form-section></app-resources-form-section>
    <app-footer></app-footer>
  `,
  styles: [`
    .content {
      background: #fff;
      min-height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .content-container {
      text-align: center;
    }
    .resources {
      padding: 80px 24px;
      min-height: auto;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    h1 {
      font-size: 2.5rem;
      color: #1E1E1E;
      margin: 0;
    }
  `]
})
export class ResourcesComponent {
  resourcesTitle = 'Escrito por <span class="about-highlight">Eduardo</span>';
  resourcesSubtitle = 'EL EBOOK MÁS VENDIDO';
  dataEditorial = DataCarouselEditorial;
  dataIntroEditorial = DataEditorialIntro;
}