import { Component, OnInit } from '@angular/core';
import { TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  public closeResult: string = '';

  constructor(
    private offcanvasService: NgbOffcanvas,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd));
  }
  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
  closeEnd(content: TemplateRef<any>) {
    this.offcanvasService.dismiss(content);
  }

  isRouteActive(route: string): boolean {
    return this.router.isActive(route, false);
  }
}
