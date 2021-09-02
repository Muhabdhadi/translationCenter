import { Component, OnInit } from '@angular/core';
import {ReqService} from '../../../../shared/services/req.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-view-quotes',
  templateUrl: './view-quotes.component.html',
  styleUrls: ['./view-quotes.component.scss']
})
export class ViewQuotesComponent implements OnInit {
quotes;
  constructor(private reqService: ReqService) { }

  ngOnInit(): void {
      this.reqService.getQuotes().subscribe((res) => {
          this.quotes = res;
          console.log(this.quotes);
      });
  }

}
