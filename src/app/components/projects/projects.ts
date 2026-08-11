import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';

interface Project {
  index: string;
  title: string;
  context: string;
  description: string;
  tags: string[];
  featured?: boolean;
  repoUrl?: string;
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
      title: 'Media Analytics Platform',
      context: 'Publicis Media',
      description:
        'Led frontend development of a media analytics platform that lets stakeholders visualize campaign performance and optimize media spend decisions in real time.',
      tags: ['React', 'TypeScript', 'Data Visualization'],
      featured: true,
    },
    {
      index: '02',
      title: 'Media Curves & MCP Server',
      context: 'Publicis Media',
      description:
        'Architected a media curves application to model and display media response data through interactive visualizations, backed by a custom MCP server integrating the Outcome Modeler and Curve Library.',
      tags: ['React', 'TypeScript', 'MCP', 'Data Visualization'],
    },
    {
      index: '03',
      title: 'VX Suite — VX-Atom & VX-Fission',
      context: 'Personal project · 2026',
      description:
        'Two production-ready vocal audio plugins with custom DSP algorithms for character compression and stereo widening, built with AI-assisted workflows to prototype and refine plugin behavior.',
      tags: ['C++', 'Swift', 'DSP', 'AI-assisted'],
    },
    {
      index: '04',
      title: 'E-Commerce Platform & Partner API',
      context: 'ForeverCar',
      description:
        'Led development of a new Angular-based e-commerce experience backed by a scalable Django/Python REST API, then designed v2.0 of the public Partner API for managing vehicles, leads, and quotes.',
      tags: ['Angular', 'Python', 'Django', 'REST APIs'],
    },
    {
      index: '05',
      title: 'blue-ui Design System',
      context: 'JPMorgan Chase & Co.',
      description:
        "Built and enhanced components within the firm's internal design system on a custom JSX framework, ensuring ADA accessibility compliance across executive-facing enterprise applications.",
      tags: ['JSX', 'Design Systems', 'Accessibility'],
    },
  ];
}
