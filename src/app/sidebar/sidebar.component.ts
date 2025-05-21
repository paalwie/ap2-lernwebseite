import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  @Output() closeSidebar = new EventEmitter<void>();
  themen: any[] = [];
  currentThema = '';

  @ViewChild('sidebarScroll') sidebarScroll!: ElementRef;

  constructor(
    private http: HttpClient,
    private router: Router,
    private state: StateService
  ) { }

  ngOnInit() {
    this.state.unterthema$.subscribe((name) => {
      this.loadThemen(name);
    });

    this.state.thema$.subscribe(name => {
      this.currentThema = name;
    });
  }

  showContent(mdPath: string, name: string) {
    this.state.setThema(name);
    this.router.navigate(['/content'], { queryParams: { file: mdPath } });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  loadThemen(name: string) {
    this.http.get<any>('assets/data/content.json').subscribe((data) => {
      for (const pruefung of data.pruefungen) {
        const unterthema = pruefung.unterthemen.find((u: any) => u.name === name);
        if (unterthema) {
          this.themen = unterthema.themen;

          setTimeout(() => this.scrollSidebarToTop(), 0);
          return;
        }
      }

      this.themen = [];
    });
  }

  scrollSidebarToTop() {
    if (this.sidebarScroll && this.sidebarScroll.nativeElement) {
      this.sidebarScroll.nativeElement.scrollTop = 0;
    }
  }

  onCloseSidebar() {
    this.closeSidebar.emit();
  }
}
