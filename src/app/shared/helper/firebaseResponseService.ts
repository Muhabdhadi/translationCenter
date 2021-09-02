import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FirebaseResponseService {
    // tslint:disable-next-line:jsdoc-format
    /** This Function add the key to the response object returned from firebase */
    convertFirebaseResponseObject(object): any[] {
        const arrayObjects = [];
        for (const [key, value] of Object.entries(object)) {
            object[key].key = key;
            arrayObjects.push(object[key]);
        }
        return arrayObjects;
    }
}
