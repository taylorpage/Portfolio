import { afterNextRender, Directive, ElementRef, inject, Injector } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly injector = inject(Injector);

  constructor() {
    afterNextRender(
      () => {
        const node = this.el.nativeElement;
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                node.classList.add('is-visible');
                observer.unobserve(node);
              }
            }
          },
          { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
        );
        observer.observe(node);
      },
      { injector: this.injector },
    );
  }
}
