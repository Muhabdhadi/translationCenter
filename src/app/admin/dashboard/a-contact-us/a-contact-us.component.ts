import { Component, OnInit } from '@angular/core';
import {ReqService} from '../../../shared/services/req.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-a-contact-us',
  templateUrl: './a-contact-us.component.html',
  styleUrls: ['./a-contact-us.component.scss']
})
export class AContactUsComponent implements OnInit {
contactUsArr;
  constructor(private reqServices: ReqService) { }

  ngOnInit(): void {
      this.getContactUs();
  }

  getContactUs(): any {
      this.reqServices.getContactUs().pipe(map(res => {
          const emails = [];
          // tslint:disable-next-line:forin
          for (const key in res) {
              emails.push(res[key]);
          }
          return emails;
      })).subscribe(res => {
          console.log(res);
          this.contactUsArr = res;
      });
  }


}
