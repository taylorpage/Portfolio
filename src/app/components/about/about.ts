import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly stats: Stat[] = [
    { value: '5+', label: 'Years experience' },
    { value: '30+', label: 'Projects shipped' },
    { value: '8', label: 'Teams collaborated with' },
    { value: '∞', label: 'Cups of coffee' },
  ];
}
