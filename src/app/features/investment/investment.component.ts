import { Component } from '@angular/core';

@Component({
  selector: 'app-investment',
  standalone: true,
  template: `
    <main class="investment">
      <h1>Club Inversión</h1>
    </main>
  `,
  styles: [`
    .investment {
      padding: 80px 24px;
      min-height: 100vh;
    }
  `]
})
export class InvestmentComponent {}