import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <main class="about">
      <h1>Sobre Eduardo</h1>
    </main>
  `,
  styles: [`
    .about {
      padding: 80px 24px;
      min-height: 100vh;
    }
  `]
})
export class AboutComponent {}