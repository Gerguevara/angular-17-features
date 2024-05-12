import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section [ngClass]="['w-full', cssClass ]">
    <!-- al poner un ngcontent en el template, se puede usar el componente
    como un contenedor, es decir un higher order component que es un wrapper
    <ng-content /> -->

  </section> `,
})
export class HeavyLoadersFastComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('HeavyLoader Fast creado');
  }
}
