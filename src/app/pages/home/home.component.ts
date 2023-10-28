import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  isLoading = true;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  async ngAfterViewInit() {
    console.time('Tempo de execução');
    const mediaElements = this.elementRef.nativeElement.querySelectorAll('img, video');
    let resourcesLoaded = 0;

    await mediaElements.forEach((element: HTMLImageElement | HTMLVideoElement) => {
      this.renderer.listen(element, 'load', () => {
        resourcesLoaded++;

        if (resourcesLoaded === mediaElements.length) {
          // Todos os recursos foram carregados
          this.isLoading = false;
        }
      });
    });

    console.timeEnd('Tempo de execução');
  }
}
