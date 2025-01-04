import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationService } from '../../shared/navigation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navService: NavigationService;
  isMobileMenuActive = false;
  blogActive = false;

  constructor(navigationService: NavigationService) {
    this.navService = navigationService;
  }

  public scrollToSection(sectionId: string) {
    this.navService.scrollToSection(sectionId);
    
    if (this.isMobileMenuActive) {
      this.toggleMenu();
    }
  }

  public toggleMenu() {
    this.isMobileMenuActive = this.isMobileMenuActive ? false : true;
  }
}
