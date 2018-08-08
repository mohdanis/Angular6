import { Component, OnInit, OnDestroy,ViewEncapsulation } from '@angular/core';
import {ActivatedRoute,Router,ParamMap,Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  // template: `
  //           <div class="ad-banner">
  //             <h3>Advertisements</h3>
  //             <ng-template ad-host></ng-template>
  //           </div>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    console.log('homeid======',id);
    this.activeRoute.params.subscribe((params:Params)=>{
      const homeId = params['id'];
      console.log('homeid params sub===',params);
    })
  }
  ngOnDestroy(){

  }

}
