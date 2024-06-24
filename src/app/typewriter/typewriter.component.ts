import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css'],
  standalone:true
})
export class TypewriterComponent implements OnInit {
  @Input() phrases: string[] = ['TEDxMDIGurgaon','Ideas Worth Spreading','Embrace the Shift']; // Default value or initial text array
  currentPhraseIndex: number = 0;
  fullText: string = '';
  displayedText: string = '';
  currentIndex: number = 0;

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter(): void {
    if (this.currentIndex < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeWriter(), 100); // Adjust typing speed here
    } else {
      setTimeout(() => {
        this.resetTypewriter();
      }, 2000); // Wait for 2 seconds before restarting
    }
  }

  resetTypewriter(): void {
    this.currentPhraseIndex =
      (this.currentPhraseIndex + 1) % this.phrases.length;
    this.fullText = this.phrases[this.currentPhraseIndex];
    this.displayedText = '';
    this.currentIndex = 0;
    this.typeWriter();
  }
}
