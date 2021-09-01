import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ReqService} from '../admin/services/req.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
contactUsForm;
  constructor(private fb: FormBuilder, private reqService: ReqService) {
    this.contactUsForm = this.fb.group({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  ngOnInit(): void {}

  submit(): void {
    this.reqService.postContactUs(this.contactUsForm.value).subscribe();
  }
}
