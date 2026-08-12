import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';
import { TECH_ICONS } from '../../shared/tech-icons';

interface ProjectTag {
  label: string;
  icon?: (typeof TECH_ICONS)[string];
}

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  index: string;
  title: string;
  context: string;
  description: string;
  tags: ProjectTag[];
  featured?: boolean;
  repoUrl?: string;
  liveUrl?: string;
  images?: ProjectImage[];
}

function tags(labels: string[]): ProjectTag[] {
  return labels.map((label) => ({ label, icon: TECH_ICONS[label] }));
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
      title: 'VX Suite — VX-Atom & VX-Fission',
      context: 'Personal project · 2026',
      description:
        'Two production-ready vocal audio plugins with custom DSP algorithms for character compression and stereo widening, built with AI-assisted workflows to prototype and refine plugin behavior.',
      tags: tags(['C++', 'Swift', 'DSP', 'AI-assisted']),
      featured: true,
      images: [
        { src: 'assets/vx-atom.png', alt: 'VX-Atom plugin interface' },
        { src: 'assets/vx-fission.png', alt: 'VX-Fission plugin interface' },
      ],
    },
    {
      index: '02',
      title: 'Angular Portfolio',
      context: 'Personal project · 2026',
      description:
        'Built this portfolio in Angular to demonstrate real experience after feedback that I needed more Angular work — a cheeky way to show both the project and the motivation behind it.',
      tags: tags(['Angular', 'TypeScript', 'Web Design']),
    },
    {
      index: '03',
      title: 'Media Curves & MCP Server',
      context: 'Publicis Media',
      description:
        'Architected a media curves application to model and display media response data through interactive visualizations, backed by a custom MCP server integrating the Outcome Modeler and Curve Library.',
      tags: tags(['React', 'TypeScript', 'MCP', 'Data Visualization']),
    },
    {
      index: '04',
      title: 'E-Commerce Platform & Partner API',
      context: 'ForeverCar',
      description:
        'Led development of a new Angular-based e-commerce experience backed by a scalable Django/Python REST API, then designed v2.0 of the public Partner API for managing vehicles, leads, and quotes.',
      tags: tags(['Angular', 'Python', 'Django', 'REST APIs']),
      images: [
        { src: 'assets/forevercar.jpg', alt: 'ForeverCar quote customization on desktop and mobile' },
      ],
    },
    {
      index: '05',
      title: 'blue-ui Design System',
      context: 'JPMorgan Chase & Co.',
      description:
        "Built and enhanced components within the firm's internal design system on a custom JSX framework, ensuring ADA accessibility compliance across executive-facing enterprise applications.",
      tags: tags(['JSX', 'Design Systems', 'Accessibility']),
    },
  ];
}
