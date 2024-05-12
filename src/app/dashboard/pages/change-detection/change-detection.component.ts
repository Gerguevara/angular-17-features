import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title [custom-title]="currentFramework()" />
  <pre> {{ frameworkAsSignal() | json }} </pre>
  <pre> {{ frameworkAsProperty | json }} </pre>`,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  );

  // signal
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  // objeto
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };


  constructor() {

    setTimeout(() => {
      // -- Cambia el objeto y no se actualiza el componente por el detectionOnpush--
      // -- pero si cambia el signal, sin necesidad de llamar la deteccion de cambios manualmente --
      // -- pero esto hace que tambien se actualice el objeto no solo el signal --
        this.frameworkAsProperty.name = 'React';
        this.frameworkAsSignal.update( value => {
          value.name = 'React';

          return {...value};
        })

        console.log('Hecho');
    }, 3000);


  }
}
