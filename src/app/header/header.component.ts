import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  data: any;
  aktivePruefung: any;
  aktiveUnterthemen: any;

  constructor(private http: HttpClient, private state: StateService) { }

  statePruefung = '';
  stateUnterthema = '';

  ngOnInit() {
    this.http.get('assets/data/content.json').subscribe((res) => {
      this.data = res;
    });

    this.state.pruefung$.subscribe(name => this.statePruefung = name);
    this.state.unterthema$.subscribe(name => this.stateUnterthema = name);
  }


  setPruefung(pruefung: any) {
    this.aktivePruefung = pruefung;
    this.aktiveUnterthemen = pruefung.unterthemen;
    this.state.setPruefung(pruefung.name);
  }

  setUnterthema(unterthema: any) {
    this.state.setUnterthema(unterthema.name); // Übergib den Namen an den State
  }
}
