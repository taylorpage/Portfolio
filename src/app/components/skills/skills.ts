import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';
import { TECH_ICONS } from '../../shared/tech-icons';

interface SkillItem {
  label: string;
  icon?: (typeof TECH_ICONS)[string];
}

interface SkillGroup {
  title: string;
  items: SkillItem[];
}

function skill(label: string): SkillItem {
  return { label, icon: TECH_ICONS[label] };
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
      items: [skill('JavaScript (ES6+)'), skill('TypeScript'), skill('Python')],
    },
    {
      title: 'Frontend',
      items: [
        skill('React'),
        skill('Next.js'),
        skill('Redux'),
        skill('Angular'),
        skill('NgRx'),
        skill('Vue'),
        { label: 'Vuex' },
        skill('HTML5'),
        skill('CSS3'),
      ],
    },
    {
      title: 'Backend',
      items: [skill('Node.js'), skill('Django'), { label: 'REST APIs' }],
    },
    {
      title: 'Tools & Platforms',
      items: [
        skill('Git'),
        skill('Copilot'),
        { label: 'Codex' },
        skill('Claude'),
        { label: 'Agile / Scrum' },
      ],
    },
  ];
}
