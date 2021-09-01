import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class ReqService {
  constructor(private http: HttpClient) {}

  postAboutUs(): Observable<any> {
    const aboutUser = {
        value: 'asdsadsadasdasdsadsadasdasdasdsadadasdsdad'
      };
    return this.http.put(`https://ng-complete-guide-2.firebaseio.com/aboutus.json`, aboutUser);
  }

  getAboutUs(): Observable<any> {
    return this.http.get(`https://ng-complete-guide-2.firebaseio.com/aboutus.json`);
  }

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
}
