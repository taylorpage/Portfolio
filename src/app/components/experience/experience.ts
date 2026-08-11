import { Component } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
  current?: boolean;
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
      role: 'Senior UI Software Engineer',
      company: 'Publicis Media',
      period: '2021 — Present',
      current: true,
      points: [
        'Integrated AI-assisted development workflows (Copilot, LLM tools) to accelerate engineering velocity and prototyping.',
        'Built an MCP server integrating Outcome Modeler and Curve Library into core systems, enabling seamless access to modeling and media curve data.',
        'Led frontend development of a media analytics platform using React + TypeScript, enabling stakeholders to visualize campaign performance and optimize media spend decisions.',
        'Architected and delivered a scalable media curves application to model and display media response data through interactive visualizations.',
        'Designed and implemented a reusable component library adopted across multiple internal applications.',
      ],
    },
    {
      role: 'Owner & Software Engineer',
      company: 'Page Engineering LLC',
      period: '2019 — 2021',
      points: [
        'Delivered full-stack solutions for multiple clients, owning architecture, development, and deployment end-to-end.',
        "Built and launched a modern Vue.js application for ForeverCar, migrating legacy systems from HubSpot to a custom platform.",
        "Integrated product offerings into Q2 Banking's consumer portal, enabling seamless quoting experiences for financial institution users.",
        'Redesigned and implemented a tailored quoting experience for Carvana, improving UX and partner integration capabilities.',
        "Architected a fully custom React application from the ground up for Doctor Solomon's, with modular, reusable UI components.",
      ],
    },
    {
      role: 'Software Engineer',
      company: 'JPMorgan Chase & Co.',
      period: '2018 — 2019',
      points: [
        "Developed and enhanced UI components within the firm's internal design system using a custom JSX framework (Blue Agave).",
        'Contributed to the evolution of the blue-ui component library, improving scalability and usability across enterprise applications.',
        'Partnered with design and product teams to deliver solutions tailored to executive (CXO-level) platforms.',
        'Ensured all components met ADA accessibility standards, improving compliance and inclusivity.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'ForeverCar',
      period: '2016 — 2018',
      points: [
        'Led development of a new Angular-based e-commerce platform, delivering a modernized user experience.',
        'Built a scalable RESTful API using Python/Django to support frontend data needs.',
        'Designed and implemented version 2.0 of the public Partner API, enabling partners to manage vehicles, leads, and quote data.',
        'Engineered an affiliate portal dashboard using Angular and Django to support lead management and co-branded experiences.',
      ],
    },
  ];
}
