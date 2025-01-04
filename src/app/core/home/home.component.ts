import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { JumbotronComponent } from "../../components/jumbotron/jumbotron.component";
import { AboutComponent } from "../about/about.component";
import { FooterComponent } from "../footer/footer.component";
import { FeaturedComponent } from "../featured/featured.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, JumbotronComponent, AboutComponent, FooterComponent, FeaturedComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
