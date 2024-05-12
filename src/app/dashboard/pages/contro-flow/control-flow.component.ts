import { Component, Signal, computed, effect, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-contro-flow',
  standalone: true,
  imports: [ TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  // asReadonly  remove the update method
  // showContent = signal(false).asReadonly
  showContent = signal<boolean>(false);

  // realmente no es necesario usar public
  public grade = signal<Grade>('A');

  public frameworks = signal<string[]>(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal<string[]>([]);
  public framework2Count = computed<number>(() => this.frameworks2().length);
  public framework2LastValue = computed<string>(() => this.frameworks2()[this.frameworks2().length - 1] || '');
  // public framework2Count: Signal<number> = computed<number>(() => this.frameworks2().length);


  constructor() {
    this.listenFrameWorks2Changes();
  }

  public toggleContent() {
    this.showContent.update(value => !value);

  }

  public addFramework(framework: string) {
    this.frameworks2.update(value => [...value, framework]);
  }

  // Para eso tenemos update, que a diferencia de set, que sobre-escribe el valor,
  // lo que hace es darnos el valor, para que podamos ejecutarlo en una funcion anonima
  // la cual su retorno return es el valor que va a “setear” en el signal.
  public removeLastFramework() {
    this.frameworks2.update(value => value.slice(0, -1));
  }
  public removeLast2Framework() {
    this.frameworks2.set([]);
  }


  public listenFrameWorks2Changes() {
    effect(() => {
      if (this.framework2Count() > 0) {
        console.log(`The count is: ${this.framework2Count()})`);
        return
      }
      console.log('Frameworks list is empty');
    });

    // si por alguna razon necesitamos ignorar un fecto y solo usar una dependencia, podesmos usar untracked
    // effect(() => {
    //   console.log(`User set to `${currentUser()}` and the counter is ${untracked(counter)}`);
    // });

  }

}
