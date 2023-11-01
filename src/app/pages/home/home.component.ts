import { ViewportScroller } from '@angular/common';
import { NavService } from './../../shared/services/nav.service';
import { Component, ElementRef, Renderer2, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectIdsEnum } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  isLoading = true;
  projectIds = ProjectIdsEnum

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private navService: NavService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0])
  }

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

  async redirect(id: string) {
    await this.navService.redirectPage('project', id)
  }
}
