import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//se pueden configurar los alias de los imports en el tsconfig.json
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {

}
