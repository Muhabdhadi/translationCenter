import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {ReqService} from '../../../shared/services/req.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
    view: string;

    constructor(private fb: FormBuilder, private reqService: ReqService) { }

  ngOnInit(): void {}

  onChangeView(view): any {
     this.view = view;
  }

}
