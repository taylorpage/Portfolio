import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly ticker: string[] = [
    'React',
    'TypeScript',
    'Angular',
    'NgRx',
    'Vue',
    'Node.js',
    'Django',
    'Python',
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'Git',
    'Redux',
    'C++',
    'Swift',
    'REST APIs',
  ];
}
