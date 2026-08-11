import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';

interface SkillGroup {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly groups: SkillGroup[] = [
    {
      title: 'Languages',
      items: ['JavaScript (ES6+)', 'TypeScript', 'Python'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Redux', 'Vue', 'Angular', 'HTML5', 'CSS3'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Django', 'REST APIs'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'Copilot', 'Codex', 'Claude', 'Agile / Scrum'],
    },
  ];
}
