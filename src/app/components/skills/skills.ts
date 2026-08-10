import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';

interface SkillGroup {
  title: string;
  icon: string;
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
      icon: '</>',
      items: ['TypeScript', 'JavaScript', 'HTML & CSS', 'SQL', 'Python'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: '◆',
      items: ['Angular', 'React', 'Node.js', 'Express', 'RxJS'],
    },
    {
      title: 'Tools & Platforms',
      icon: '⚙',
      items: ['Git', 'Docker', 'Vite', 'Jest / Vitest', 'Figma'],
    },
    {
      title: 'Cloud & Infra',
      icon: '☁',
      items: ['AWS', 'Vercel', 'CI/CD', 'PostgreSQL', 'Redis'],
    },
  ];
}
