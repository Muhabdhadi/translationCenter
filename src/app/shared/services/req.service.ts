import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseResponseService } from '../helper/firebaseResponseService';

@Injectable({
  providedIn: 'root',
})

export class ReqService {
  constructor(private http: HttpClient, private firebaseResponseService: FirebaseResponseService) {}

  postContactUs(contactUsForm): Observable<any> {
    return this.http.post(`https://ng-complete-guide-2.firebaseio.com/contactus.json`, contactUsForm);
  }

  getContactUs(): Observable<any> {
    return this.http.get(`https://ng-complete-guide-2.firebaseio.com/contactus.json`);
  }

  getContactUsByEmail(email): any {
      return this.http.get(`https://ng-complete-guide-2.firebaseio.com/contactus.json`, {
          params: new HttpParams()
          .set('orderBy', `"email"`)
          .set('equalTo', email)
      }).pipe(map(result => {
          // tslint:disable-next-line:forin
          for (const r in result) {
              return result[r];
          }
      }));
  }

  postQuote(quote: any): any {
      return this.http.put(`https://ng-complete-guide-2.firebaseio.com/quotes.json`, quote);
  }

  getQuotes(): any {
        return this.http.get(`https://ng-complete-guide-2.firebaseio.com/quotes.json`).pipe(map(quoteObject => {
            return this.firebaseResponseService.convertFirebaseResponseObject(quoteObject);
        }));
    }

  postAboutUs(aboutus): any {
      return this.http.put(`https://ng-complete-guide-2.firebaseio.com/aboutus.json`, aboutus);
  }

  getAboutUs(): any {
        return this.http.get(`https://ng-complete-guide-2.firebaseio.com/aboutus.json`);
    }
}
