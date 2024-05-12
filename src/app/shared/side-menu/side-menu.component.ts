import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  // flat aplna el arreglo a un solo nivel (nomarmente tendirmaos 2 arreglos de arreglos pero flat lo convierte en uno solo)

  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route?.path)
    .filter((route) => !route.path?.includes(':') && route.path != '**')
  constructor() { }
}
