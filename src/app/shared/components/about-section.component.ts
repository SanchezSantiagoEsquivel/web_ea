import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section class="about-section">
      <div class="about-frame">
        <!-- Moving text elements -->
        <div class="moving-text-layer">
          <div class="text-element eduardo-1" [class.visible]="showMovingText">EDUARDO</div>
          <div class="text-element eduardo-2" [class.visible]="showMovingText">EDUARDO</div>
          <div class="text-element eduardo-3" [class.visible]="showMovingText">EDUARDO</div>
          <div class="text-element acevedo-1" [class.visible]="showMovingText">ACEVEDO</div>
          <div class="text-element acevedo-2" [class.visible]="showMovingText">ACEVEDO</div>
          <div class="text-element acevedo-3" [class.visible]="showMovingText">ACEVEDO</div>
        </div>
        
        <div class="content-block">
          <div class="content-header">
            <span class="section-title">SOBRE</span>
            <div class="divider"></div>
            <h2 class="name-title">Eduardo <span class="italic-text">Acevedo</span></h2>
          </div>
          <div class="content-body">
            <div class="vertical-separator"></div>
            <div class="description">
              <p>Empresario con una visión estratégica y humana, que ha convertido cada desafío en una nueva oportunidad. Ha liderado proyectos en sectores como turismo, real estate y salud, construyendo negocios sólidos y escalables. Su trayectoria refleja experiencia, adaptabilidad y un compromiso constante con crear valor real.</p>
            </div>
          </div>
          <div class="info-blocks">
            <div class="info-block" [class.visible]="showBlock1">
              <h3>Fundador de empresas de diversos sectores</h3>
              <p>Ha creado empresas en turismo, salud y real estate, combinando visión, análisis y modelos de negocio que crecen de forma sólida y sostenible.</p>
            </div>
            <div class="info-block" [class.visible]="showBlock2">
              <h3>Inversor estratégico</h3>
              <p>Identifica oportunidades de inversión con potencial de crecimiento, aplicando criterios rigurosos y una visión a largo plazo.</p>
            </div>
            <div class="info-block" [class.visible]="showBlock3">
              <h3>Mentor y consultor</h3>
              <p>Comparte su experiencia con emprendedores y empresarios, ayudándoles a desarrollar estrategias efectivas y sostenibles.</p>
            </div>
          </div>
          <div class="content-footer">
            <div class="footer-divider"></div>
            <button class="cta-button" (click)="navigateToAbout()">CONOCER MÁS</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit, OnDestroy {
  showBlock1 = false;
  showBlock2 = false;
  showBlock3 = false;
  showMovingText = false;
  private timeouts: number[] = [];
  private observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef, private router: Router) {}

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    this.timeouts.forEach(timeout => clearTimeout(timeout));
    this.observer?.disconnect();
  }

  navigateToAbout() {
    this.router.navigate(['/sobre-eduardo']);
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.showMovingText = true;
            this.startAnimation();
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  private startAnimation() {
    const contentBlock = document.querySelector('.content-block') as HTMLElement;
    if (!contentBlock) return;

    let startTime: number;
    const duration = 1000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const translateY = 50 * (1 - progress);
      const opacity = progress;

      contentBlock.style.transform = `translateY(${translateY}px)`;
      contentBlock.style.opacity = opacity.toString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.showInfoBlocks();
      }
    };

    requestAnimationFrame(animate);
  }

  private showInfoBlocks() {
    this.timeouts.push(setTimeout(() => {
      this.showBlock1 = true;
    }, 800));
    
    this.timeouts.push(setTimeout(() => {
      this.showBlock2 = true;
    }, 1200));
    
    this.timeouts.push(setTimeout(() => {
      this.showBlock3 = true;
    }, 1600));
  }
}