import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { Hero1Component } from '../hero1/hero1.component';
import { Hero2Component } from '../hero2/hero2.component';
import { Hero3Component } from '../hero3/hero3.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    Hero2Component,
    Hero1Component,
    Hero3Component,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = document.getElementById('yourElementId');
    if (element) {
      const offsetTop = element.offsetTop;
      const scrollSpeed = 0.3;
      const scrollPosition = window.pageYOffset * scrollSpeed;

      const bg1 = this.el.nativeElement.querySelector('.bg1');
      this.renderer.setStyle(
        bg1,
        'background-position',
        `center -${scrollPosition}px`
      );

      const hero2 = this.el.nativeElement.querySelector('.hero2');
      const header = this.el.nativeElement.querySelector('.header');
      const hero2Top = hero2.offsetTop;
      const hero2Bottom = hero2.offsetTop + hero2.offsetHeight;

      if (window.pageYOffset >= hero2Top && window.pageYOffset <= hero2Bottom) {
        console.log('scroll');
        header.classList.remove('text-slate-100');
        header.classList.add('text-slate-600');
      } else if (
        window.pageYOffset >= hero2Bottom ||
        window.pageYOffset <= hero2Top
      ) {
        header.classList.remove('text-slate-600');
        header.classList.add('text-slate-100');
      } else if (window.pageYOffset >= hero2Bottom) {
        header.classList.remove('text-slate-600');
        header.classList.add('text-slate-100');
      }
    } else {
      null;
    }
  }
}
