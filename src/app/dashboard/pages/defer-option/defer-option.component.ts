import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent ],
  templateUrl: './defer-option.component.html',
  styles: ``
})
export default class DeferOptionsComponent {

showElement = signal<boolean>(false);


ShowElement() {
this.showElement.set(true);
}

}
