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
    { value: '10+', label: 'Years experience' },
    { value: '4', label: 'Companies & teams' },
    { value: '2', label: 'DSP plugins shipped' },
    { value: '∞', label: 'Cups of coffee' },
  ];
}
