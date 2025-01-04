import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  getFormEndpoint = "https://getform.io/f/05681971-283c-40ad-9c6b-b116b15df570";
}
