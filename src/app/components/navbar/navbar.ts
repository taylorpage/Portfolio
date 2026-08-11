import { afterNextRender, Component, DestroyRef, inject, Injector, signal } from '@angular/core';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly injector = inject(Injector);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly links: NavLink[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);
  protected readonly activeSection = signal<string>('');

  constructor() {
    afterNextRender(
      () => {
        const onScroll = () => this.isScrolled.set(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        const sections = this.links
          .map((link) => document.getElementById(link.id))
          .filter((el): el is HTMLElement => !!el);

        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                this.activeSection.set(entry.target.id);
              }
            }
          },
          { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
        );
        sections.forEach((section) => observer.observe(section));

        this.destroyRef.onDestroy(() => {
          window.removeEventListener('scroll', onScroll);
          observer.disconnect();
        });
      },
      { injector: this.injector },
    );
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
