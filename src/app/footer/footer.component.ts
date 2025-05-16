import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  showForm = false;
  form = { subject: '', message: '' };

  constructor(private http: HttpClient) {}

  submitForm() {
    const data = {
      subject: this.form.subject,
      message: this.form.message,
    };

    this.http.post('https://formspree.io/f/mrbqjqkv', data).subscribe(() => {
      alert('Fehler wurde gesendet.');
      this.showForm = false;
      this.form = { subject: '', message: '' };
    });
  }
}
