import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  template: `
    <div *ngIf="markdownPath; else welcome">
      <markdown [src]="markdownPath"></markdown>
    </div>
    <ng-template #welcome>
      <h1>Willkommen!</h1>
      <p>Bitte wählen Sie ein Thema aus der Navigation, um den Inhalt anzuzeigen.</p>
      </ng-template>
  `,
})
export class ContentComponent implements OnInit {
  markdownPath = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.markdownPath = params['file'] || '';
    });
  }
}
