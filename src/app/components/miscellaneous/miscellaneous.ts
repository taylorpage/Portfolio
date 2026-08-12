import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';

interface MiscItem {
  title: string;
  description: string;
  tags?: string[];
}

@Component({
  selector: 'app-miscellaneous',
  imports: [RevealDirective],
  templateUrl: './miscellaneous.html',
  styleUrl: './miscellaneous.scss',
})
export class Miscellaneous {
  protected readonly items: MiscItem[] = [
    {
      title: 'Open source contributions',
      description:
        'Maintained tooling and UI libraries, reviewed PRs, and contributed fixes to several community projects focused on developer experience and accessibility.',
      tags: ['Git', 'Open Source', 'Collaboration'],
    },
    {
      title: 'Engineering experimentation',
      description:
        'Built small cross-platform utilities and prototypes for design systems, developer workflows, and performance testing using TypeScript, Swift, and C++.',
      tags: ['TypeScript', 'Swift', 'C++'],
    },
    {
      title: 'Technical storytelling',
      description:
        'Authored notes and documentation to communicate architecture decisions clearly, from frontend performance patterns to DevOps and deployment best practices.',
      tags: ['Writing', 'Docs', 'Architecture'],
    },
  ];
}
