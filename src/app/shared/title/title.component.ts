import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: ' <h1 class="text-3xl mb-5">{{ title }}</h1>',
  styles: ``
})
export class TitleComponent {

  // ahora se le pueden pasar atributos a los decoradores
  @Input({ required: true , alias:'custom-title'}) title!: string;
  // transform basicamente hace un parse, por defecto recibe un string y lo convierte a lo que le indiquemos
  @Input({ transform: booleanAttribute }) withShadow:boolean = false;
}
