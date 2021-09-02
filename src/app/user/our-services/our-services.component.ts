import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
      this.titleService.setTitle('Dindo-lock | Our Services');
  }

}
