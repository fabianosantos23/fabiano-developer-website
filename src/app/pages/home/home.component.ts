import { NavService } from './../../shared/services/nav.service';
import { Component, ElementRef, Renderer2, AfterViewInit, OnInit } from '@angular/core';
import { ProjectIdsEnum } from 'src/app/shared/services/project.service';
import { Store } from '@ngxs/store';
import { SetIsLoadingAction } from 'src/store/store.meta.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  projectIds = ProjectIdsEnum

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private navService: NavService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new SetIsLoadingAction(true))
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
          this.store.dispatch(new SetIsLoadingAction(false))
        }
      });
    });

    console.timeEnd('Tempo de execução');
  }

  async redirect(id: string) {
    await this.navService.redirectPage('project', id)
  }
}
