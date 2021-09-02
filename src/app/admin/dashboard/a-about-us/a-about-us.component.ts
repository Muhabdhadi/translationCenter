import {Component, OnDestroy, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormControl} from '@angular/forms';
import {ReqService} from '../../../shared/services/req.service';

@Component({
  selector: 'app-a-about-us',
  templateUrl: './a-about-us.component.html',
  styleUrls: ['./a-about-us.component.scss']
})
export class AAboutUsComponent implements OnInit, OnDestroy {
    public Editor = ClassicEditor;
    public ckeditor;

    constructor(private reqService: ReqService) { }

  ngOnInit(): void {
        this.getAboutUsInfo();
  }

  ngOnDestroy(): void {
  }

  getAboutUsInfo(): any {
      this.reqService.getAboutUs().subscribe(res => {
          this.ckeditor = res.aboutUs;
      });
  }

  submit(): void {
        const aboutUsBody = {
            aboutUs: this.ckeditor
        };
        this.reqService.postAboutUs(aboutUsBody).subscribe(res => {
            this.ckeditor = res.aboutUs;
        });
  }

}
