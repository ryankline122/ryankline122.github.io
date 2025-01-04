import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private viewportScroller: ViewportScroller) { }

  public scrollToSection(sectionId: string) {
    if (sectionId === "home") {
      window.scrollTo(0,0);
    } else {
      this.viewportScroller.setOffset([0,120]);
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }
}

