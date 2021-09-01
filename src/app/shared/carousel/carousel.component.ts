import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [
    {path: 'http://www.loc-pros.com/images/sliderr1.jpg'},
    {path: 'http://www.loc-pros.com/images/slider2.jpg'},
    {path: 'http://www.loc-pros.com/images/slider3.jpg'},
    {path: 'http://www.loc-pros.com/images/slider4.jpg'},
];
  constructor() { }

  ngOnInit(): void {
  }

}
