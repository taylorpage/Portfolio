import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';

interface Project {
  index: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  repoUrl: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects: Project[] = [
    {
      index: '01',
      title: 'Pulse — Realtime Analytics Dashboard',
      description:
        'A self-hosted analytics dashboard with live event streaming, custom funnels, and shareable reports.',
      tags: ['Angular', 'Signals', 'WebSockets', 'PostgreSQL'],
      featured: true,
      repoUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      index: '02',
      title: 'Reef',
      description: 'A component library and design-token pipeline shared across three product teams.',
      tags: ['TypeScript', 'Storybook', 'SCSS'],
      repoUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      index: '03',
      title: 'Ledger CLI',
      description: 'A terminal-first expense tracker with plain-text ledgers and budget forecasting.',
      tags: ['Node.js', 'CLI', 'SQLite'],
      repoUrl: 'https://github.com/',
    },
    {
      index: '04',
      title: 'Nimbus API Gateway',
      description: 'A lightweight API gateway with request shaping, caching, and per-route rate limiting.',
      tags: ['Express', 'Redis', 'Docker'],
      repoUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      index: '05',
      title: 'Focal',
      description: 'A distraction-free writing app with local-first storage and markdown export.',
      tags: ['React', 'IndexedDB', 'Vite'],
      repoUrl: 'https://github.com/',
    },
  ];
}
