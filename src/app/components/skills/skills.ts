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
      items: ['TypeScript', 'JavaScript', 'HTML & CSS', 'SQL', 'Python'],
    },
    {
      title: 'Frameworks',
      items: ['Angular', 'React', 'Node.js', 'Express', 'RxJS'],
    },
    {
      title: 'Tools',
      items: ['Git', 'Docker', 'Vite', 'Jest / Vitest', 'Figma'],
    },
    {
      title: 'Cloud & Infra',
      items: ['AWS', 'Vercel', 'CI/CD', 'PostgreSQL', 'Redis'],
    },
  ];
}
