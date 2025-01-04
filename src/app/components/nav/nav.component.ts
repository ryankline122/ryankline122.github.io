/* eslint-disable @typescript-eslint/no-inferrable-types */
import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink, 
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isBlogFeatureEnabled = false;
  isNavOpen: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string) {
    if (sectionId === "home") {
      window.scrollTo(0,0);
    } else {
      this.viewportScroller.setOffset([0,120]);
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }

  toggleNav(): void {
    if (this.isNavOpen) {
      this.isNavOpen = false;
    } else {
      this.isNavOpen = true;
    }
  }
}
