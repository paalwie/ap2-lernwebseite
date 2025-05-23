import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MarkdownModule
  ],
  template: `
    <ng-container *ngIf="!markdownPath">
  <input
    type="text"
    [(ngModel)]="searchQuery"
    (input)="onSearchInputChange()"
    placeholder="Suchbegriff eingeben"
  />

  <ul *ngIf="searchResults.length > 0 && searchQuery.length > 0">
    <li *ngFor="let result of searchResults">
      <a [routerLink]="['/content']" [queryParams]="{ file: result.markdown }" (click)="clearSearch()">
        {{ result.name }}
      </a>
    </li>
  </ul>
</ng-container>

<!-- Scroll-Container mit Referenz -->
<div #scrollableContent id="scrollableContent" class="scroll-container" *ngIf="markdownPath && (searchResults.length === 0 || searchQuery.length === 0)">
  <markdown [src]="markdownPath"></markdown>
</div>

<ng-template [ngIf]="!markdownPath && (searchResults.length === 0 || searchQuery.length === 0)">
  <h1>Willkommen!</h1>
  <p>Diese Website dient der Vorbereitung auf die Abschlussprüfung Teil 2 (AP2) für Fachinformatikerinnen und Fachinformatiker der Fachrichtung Anwendungsentwicklung.</p>
  <p>Die schriftliche Prüfung besteht aus drei Teilen:</p>
  <ul>
    <li><strong>Planen eines Softwareproduktes</strong> – Anforderungen erfassen, Konzepte entwickeln, Projektplanung durchführen</li>
    <li><strong>Entwicklung und Umsetzung von Algorithmen</strong> – Programmierlogik, Problemlösungen und Umsetzung technischer Anforderungen</li>
    <li><strong>Wirtschafts- und Sozialkunde</strong> – Grundlagen aus Wirtschaft, Recht und Gesellschaft</li>
  </ul>
  <p>Die Inhalte auf dieser Website orientieren sich am aktuellen, offiziellen Prüfungskatalog und sind in drei übergeordnete Themenbereiche gegliedert. Wählen Sie oben ein Thema oder nutzen Sie die Suche.</p>
</ng-template>

  `
})
export class ContentComponent implements OnInit {
  markdownPath = '';
  searchQuery = '';
  searchResults: { name: string; markdown: string }[] = [];
  jsonData: any;

  // ViewChild für Scrollverhalten
  @ViewChild('scrollableContent') scrollableContent!: ElementRef;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('/assets/data/content.json').subscribe(data => {
      this.jsonData = data;
    }, error => {
      console.error('Fehler beim Laden von content.json:', error);
    });

    this.route.queryParams.subscribe(params => {
      this.markdownPath = params['file'] || '';

      if (this.markdownPath) {
        this.clearSearch();

        // Nach kleinem Timeout scrollen (damit View gerendert ist)
        setTimeout(() => {
          this.scrollToTop();
        }, 0);
      }
    });
  }

  scrollToTop() {
    if (this.scrollableContent && this.scrollableContent.nativeElement) {
      this.scrollableContent.nativeElement.scrollTop = 0;
    }
  }

  onSearchInputChange() {
    if (this.searchQuery.length > 0) {
      this.search();
    } else {
      this.clearSearch();
    }
  }

  search() {
    this.searchResults = [];

    if (!this.searchQuery || !this.jsonData) {
      return;
    }

    const query = this.searchQuery.toLowerCase();

    const recurse = (currentObject: any) => {
      if (currentObject.name && currentObject.markdown && currentObject.name.toLowerCase().includes(query)) {
        this.searchResults.push({ name: currentObject.name, markdown: currentObject.markdown });
      }

      for (const key in currentObject) {
        if (currentObject.hasOwnProperty(key)) {
          const value = currentObject[key];

          if (Array.isArray(value)) {
            value.forEach((item: any) => recurse(item));
          } else if (typeof value === 'object' && value !== null) {
            recurse(value);
          }
        }
      }
    };
    recurse(this.jsonData);
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
}
