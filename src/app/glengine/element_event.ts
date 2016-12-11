import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

@Injectable()
export class ElementEvent {

    keydown(element: any) {
       return  Observable.fromEvent(element, 'keydown')
       .map(event =>{
           if (event['keyCode'] != 123 ) {event['preventDefault']();}
           return  event['keyCode'];
        });
    }

    keyup(element: any) {
       return  Observable.fromEvent(element, 'keyup')
       .map(event => {
           if (event['keyCode'] != 123 ) {event['preventDefault']();}
           return event['keyCode'];
        });
    }

    click(element: any){
        return Observable.fromEvent(element, 'click').map(event => [event['clientX'], event['clientY']]);
    }
}