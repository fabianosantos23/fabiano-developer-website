import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    email: '',
  };

  onSubmit() {
    console.log('Formulário enviado:', this.contact);
  }
}
