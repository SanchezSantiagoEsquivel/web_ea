import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section class="about-section">
      <div class="about-frame"></div>
    </section>
  `,
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {}