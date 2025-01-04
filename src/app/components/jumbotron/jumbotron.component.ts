import { Component, Renderer2 } from '@angular/core';
import { NavigationService } from '../../shared/navigation.service';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.css'
})
export class JumbotronComponent {
  navService: NavigationService;
  title = "Ryan Kline test";
  subtitle = "Full Stack Software Engineer";

  constructor(navigationService: NavigationService, private renderer: Renderer2) {
    this.navService = navigationService;
  }

  public scrollToSection(sectionId: string) {
    this.navService.scrollToSection(sectionId);
  }

  public downloadFile(filePath: string) {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', filePath);
    link.click();
    link.remove();
  }
}
