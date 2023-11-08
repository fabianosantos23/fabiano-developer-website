import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobileOptionsOpen = false

  constructor(
    private navService: NavService,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    const isClickedInside = this.elementRef.nativeElement.contains(event.target)
    if (!isClickedInside && this.isMobileOptionsOpen ) {
      this.toggleMobileOptions()
    }
  }

  toggleMobileOptions() {
    this.isMobileOptionsOpen = !this.isMobileOptionsOpen
  }

  async redirect(page: string) {
    this.toggleMobileOptions()
    await this.navService.redirectPage(page)
  }
}
