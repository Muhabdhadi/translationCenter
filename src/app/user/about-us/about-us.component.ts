import { Component, OnInit } from '@angular/core';
import {ReqService} from '../../shared/services/req.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private reqService: ReqService, private titleService: Title) {
  }

  ngOnInit(): void {
      this.titleService.setTitle('Dindo-lock | About us');
      this.reqService.getAboutUs().subscribe((aboutUsData) => {
          document.querySelector('.aboutus__container__p').innerHTML = aboutUsData.aboutUs;
      });
  }

}
