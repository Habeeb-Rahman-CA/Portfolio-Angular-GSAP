import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import gsap, { selector } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  @ViewChild('centerBox', { static: true }) centerBox!: ElementRef<HTMLDivElement>
  @ViewChild('header', { static: true }) header!: ElementRef<HTMLDivElement>
  @ViewChild('sectionOne', { static: true }) sectionOne!: ElementRef<HTMLDivElement>
  @ViewChild('imageSecond', { static: true }) imageSecond!: ElementRef<HTMLDivElement>
  @ViewChild('imageSecondCap', { static: true }) imageSecondCap!: ElementRef<HTMLDivElement>
  @ViewChild('imageThird', { static: true }) imageThird!: ElementRef<HTMLDivElement>
  @ViewChild('imageFourth', { static: true }) imageFourth!: ElementRef<HTMLDivElement>
  @ViewChild('imageFourthCap', { static: true }) imageFourthCap!: ElementRef<HTMLDivElement>
  @ViewChild('imageFifth', { static: true }) imageFifth!: ElementRef<HTMLDivElement>

  @ViewChild('titles', { static: true }) titles!: ElementRef<HTMLDivElement>
  @ViewChild('letter', { static: true }) letter!: ElementRef<HTMLDivElement>
  @ViewChild('paragraph', { static: true }) paragraph!: ElementRef<HTMLDivElement>
  @ViewChild('imageOne', { static: true }) imageOne!: ElementRef<HTMLDivElement>
  @ViewChild('imageTwo', { static: true }) imageTwo!: ElementRef<HTMLDivElement>

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.disableScroll(true)
  }

  disableScroll(disabled: boolean): void {
    if (disabled) {
      this.document.body.style.overflowY = 'hidden'
    } else {
      this.document.body.style.overflowY = 'auto'
    }
  }

  iniAnimation(): void {
    gsap.from(this.header.nativeElement.childNodes,{
      delay: 0.4,
      duration:0.8,
      y:30,
      opacity: 0,
      stagger: 0.15
    })
    gsap.from(this.centerBox.nativeElement.childNodes,{
      delay: 0.5,
      duration:0.8,
      y:90,
      opacity: 0,
      stagger: 0.15
    })
    gsap.from(this.sectionOne.nativeElement.childNodes,{
      delay: 0.7,
      duration:0.5,
      y:70,
      opacity: 0,
      stagger: 0.1,
      onComplete: () => this.disableScroll(false)
    })
  }

}
