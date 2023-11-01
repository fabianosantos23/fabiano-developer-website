import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(
    private router: Router,
  ) {}

  scrollToElement(elementId: string): void {
    const element = document.querySelector('#' + elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async redirectPage(page: string, id?: string) {
    const urlSegments = this.router.url.split('/');
    const segment = urlSegments[1];
    console.log(urlSegments, segment, page)
    if (segment === page) {
      this.scrollToElement(page)
      return
    }
    if (page === 'projects' || page === 'skills' || page === 'contact') {
      await this.router.navigate([`/home`])
      setTimeout(() => {
        this.scrollToElement(page)
      }, 100);
      return
    }
    const params = id ? [`/${page}`, id] : [`/${page}`]
    await this.router.navigate(params)
  }
}
