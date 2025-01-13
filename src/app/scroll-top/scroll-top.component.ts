import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent implements OnInit {
  showScroll: boolean = false;
  showScrollHeight: number = 200;
  hideScrollHeight: number = 200;

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScroll =
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > this.showScrollHeight;
  }

  ngOnInit() {}

  scrollToTop() {
    this.smoothScrollTop();
  }

  private smoothScrollTop() {
    const scrollStep: number = -window.scrollY / 15;
    if (window.scrollY > 0) {
      window.requestAnimationFrame(() => {
        window.scrollTo(0, window.scrollY + scrollStep);
        this.smoothScrollTop();
      });
    }
  }
}
