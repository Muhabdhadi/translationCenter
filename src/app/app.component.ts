import {Component, OnInit} from '@angular/core';
import {ReqService} from './shared/services/req.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'translationCenter';
  constructor(private reqService: ReqService) {}
  ngOnInit(): any {
  }

  onClick(): any {
    this.reqService.getAboutUs().subscribe();
  }
}
