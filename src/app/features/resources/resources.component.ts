import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  standalone: true,
  template: `
    <main class="resources">
      <h1>Recursos</h1>
    </main>
  `,
  styles: [`
    .resources {
      padding: 80px 24px;
      min-height: 100vh;
    }
  `]
})
export class ResourcesComponent {}