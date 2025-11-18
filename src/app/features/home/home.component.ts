import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero.component';
import { AboutSectionComponent } from '../../shared/components/about-section.component';
import { FooterComponent } from '../../shared/components/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutSectionComponent,
    FooterComponent
  ],
  template: `
    <div class="home-container">
      <app-hero></app-hero>
      <app-about-section></app-about-section>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}