import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReqService} from '../../../../shared/services/req.service';
import {Observable} from 'rxjs';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-a-contact-us-details',
  templateUrl: './a-contact-us-details.component.html',
  styleUrls: ['./a-contact-us-details.component.scss']
})
export class AContactUsDetailsComponent implements OnInit {
email;
curentEmail;
contactusForm = this.fb.group({
    name: '',
    email: '',
    subject: '',
    message: ''
});
  constructor(private activatedRoute: ActivatedRoute, private reqService: ReqService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
      this.getRoutingParams();
  }


  getRoutingParams(): any {
      this.activatedRoute.queryParams.subscribe(params => {
          this.email = params['email'];
      });
      this.getContactUsByEmail();
  }

  getContactUsByEmail(): any {
      this.reqService.getContactUsByEmail(`"${this.email}"`).subscribe((res) => {
          this.curentEmail = res;
          this.contactusForm.patchValue({
              name: res.name,
              email: res.email,
              subject: res.subject,
              message: res.message
          });
      });
  }

}
