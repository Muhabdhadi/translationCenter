import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ReqService} from '../../shared/services/req.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
contactUsForm;
  constructor(private fb: FormBuilder, private reqService: ReqService, private titleService: Title) {
    this.contactUsForm = this.fb.group({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  ngOnInit(): void {
      this.titleService.setTitle('Dindo-lock | Contact us');
  }

  submit(): void {
    this.reqService.postContactUs(this.contactUsForm.value).subscribe();
  }
}
