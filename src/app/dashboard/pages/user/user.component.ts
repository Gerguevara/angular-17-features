import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { TitleComponent } from '@shared/title/title.component';

import { switchMap } from 'rxjs';
import { UsersService } from '@service//user.service';


@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [custom-title]="titleLabel()" />

    @if( user() ) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

      <div>
        <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
        <p>{{ user()?.email }}</p>
      </div>
    </section>

    } @else {
    <p>Cargando información</p>
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // usa y asigna inmediatamente el response, haciendo una cancelacion de la emision anterior  y cambiandola por la del service
  // el servicio se encarga de hacer la peticion  y devover la info de el usuario que es tomada por la senal
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name
        } `;
    }

    return 'Información del usuario';
  });
}
