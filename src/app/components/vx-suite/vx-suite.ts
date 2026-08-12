import { Component, HostListener } from '@angular/core';

import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-vx-suite',
  imports: [RevealDirective],
  templateUrl: './vx-suite.html',
  styleUrl: './vx-suite.scss',
})
export class VxSuite {
  isAlgorithmOpen = false;

  openAlgorithm() {
    this.isAlgorithmOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeAlgorithm() {
    this.isAlgorithmOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isAlgorithmOpen) {
      this.closeAlgorithm();
    }
  }
}
