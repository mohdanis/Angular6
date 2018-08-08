import { Component, OnInit, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

import { ConfigService } from '../config/config.service';
import { tap } from '../../../node_modules/rxjs/operators';
import {Observable,throwError,of,Subject,BehaviorSubject,ReplaySubject} from 'rxjs';

@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ListingComponent implements OnInit {

    constructor(private configService: ConfigService) {}
    @Input() item;
    @Input() parentitem;
    templateUrl: string = 'abc.html';
    @Output() parentItemArr = new EventEmitter();
    ngOnInit() {
      this.updateChildComponent(this.item);
    }
    updateChildComponent(dataitem){
      //this.configService.subject.next(dataitem);
    }
    updateParent() {
        console.log(this.parentitem);
        // for @output
        //this.parentItemArr.emit(this.parentitem);
        // for Subject
        this.configService.subject.next(this.parentitem);
        //this.configService.getSubject().pipe(tap(this.parentitem));
        // for behaviour
        this.configService.getBehavior().asObservable().subscribe((data) => {
          console.log("First subscriber got data >>>>> "+ data);
        });
        this.configService.getBehavior().next('Ranjan');
        // for replay
        this.configService.repSubject.next('sandeep');
        this.configService.repSubject.asObservable().subscribe((data) => {
          console.log("First subscriber got data >>>>> "+ data);
        });
        
    }
}
