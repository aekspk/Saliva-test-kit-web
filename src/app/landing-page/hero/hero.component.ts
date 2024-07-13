import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIcon } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';
import { Hero1Component } from '../../hero1/hero1.component';
import { Hero2Component } from '../../hero2/hero2.component';
import { Hero3Component } from '../../hero3/hero3.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatIcon,
    HeaderComponent,
    Hero1Component,
    Hero2Component,
    Hero3Component,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}
}
