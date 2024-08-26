import { Component, Input, OnInit } from '@angular/core';
//import { DataService } from '../../services/data.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MovieDto } from '../../models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger("slideFade", [
      state("void", style({opacity: 0})),
      transition("void <=> *", [animate("1s")]),
    ]),
  ],
})
export class SliderComponent implements OnInit{

  @Input() slides : MovieDto[] = [];
  @Input() isHeader = false;

  constructor() { }

  slideIndex = 0;

  ngOnInit() {
    if(!this.isHeader){
      this.changeSlide();
    }
  }

  changeSlide(){
    setInterval(() => {
      this.slideIndex +=1;
      if(this.slideIndex > 3) {
        this.slideIndex = 0;
      }
    },5000)
  }
}
