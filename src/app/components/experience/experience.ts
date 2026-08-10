import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly items: ExperienceItem[] = [
    {
      role: 'Senior Software Engineer',
      company: 'Nova Labs',
      period: '2023 — Present',
      points: [
        'Led the migration of a legacy AngularJS app to modern Angular with signals, cutting bundle size by 38%.',
        'Designed a shared component library adopted across 4 product teams.',
        'Mentored two junior engineers through structured pairing and code review.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Brightline',
      period: '2021 — 2023',
      points: [
        'Built and shipped a realtime notifications system handling 50k+ concurrent connections.',
        'Owned the checkout flow rewrite, improving conversion by 12%.',
        'Introduced automated visual regression testing into the CI pipeline.',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'Studio Forge',
      period: '2019 — 2021',
      points: [
        'Delivered client marketing sites and dashboards using React and TypeScript.',
        'Partnered directly with designers to build a reusable animation toolkit.',
      ],
    },
  ];
}
