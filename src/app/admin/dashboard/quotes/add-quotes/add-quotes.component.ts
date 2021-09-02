import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {ReqService} from '../../../../shared/services/req.service';

@Component({
  selector: 'app-add-quotes',
  templateUrl: './add-quotes.component.html',
  styleUrls: ['./add-quotes.component.scss']
})
export class AddQuotesComponent implements OnInit {

    form = this.fb.group({
        quotes: this.fb.array([])
    });
    constructor(private fb: FormBuilder, private reqService: ReqService) { }


    ngOnInit(): void { }

    get quotes(): FormArray {
        return this.form.controls['quotes'] as FormArray;
    }

    addQuote(): any {
        const quoteForm = this.fb.group({
            quote: ['', Validators.required]
        });
        this.quotes.push(quoteForm);
    }

    deleteQuote(quotesIndex): any {
        this.quotes.removeAt(quotesIndex);
    }

    createQuotes(): any {
        const quotes = this.quotes.getRawValue();
        this.reqService.postQuote(quotes).subscribe();
    }

}
