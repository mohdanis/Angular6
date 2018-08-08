import { Component, OnInit,ViewEncapsulation,OnDestroy } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-newslisting',
  templateUrl: './newslisting.component.html',
  styleUrls: ['./newslisting.component.scss'],
  providers:[ConfigService,HeaderComponent],
  encapsulation: ViewEncapsulation.None,
})
export class NewslistingComponent implements OnInit,OnDestroy {
  constructor(private configService: ConfigService,private headerdata:HeaderComponent) { 
    this.getNewsData();
  }
  //newslistingdata:any={name:"Anis"};
  
  newsResult:any = {};
  listitems:Array<any>=[];
  filterData:Array<any>;
  herodata:Array<any> = [];
  endPoint:number = 30;
  startPoint:number = 0;
  selectedFilter:string='all';
  serviceUrl:string="all/web/list/news/"+this.selectedFilter+"/"+this.startPoint+"/"+this.endPoint;
  loadmoreFlag:string='default';
  private sub:any;
 
 
  ngOnInit() {
    this.sub = this.configService.subject.subscribe(
      (sharedData:Array<any>) => {
        console.log('shareddata===',sharedData);
        this.herodata = sharedData;
      }
    )
    this.configService.getSubject().subscribe(data=>{
      console.log('subjectdata',data);
    })
  }
  ngOnDestroy(){
    //this.sub.unsubscribe();
  }
  private populateData(response){
    this.newsResult = response;
    if(response){
     if(response.ListingResponse  && response.ListingResponse.response && response.ListingResponse.response.docs){
       let listData = response.ListingResponse.response.docs;
      if(this.loadmoreFlag =='loadmore'){
        this.listitems =  this.listitems.concat(listData);
      }else{
        this.listitems = response.ListingResponse.response.docs;
      } 
     }
     if(response.PageFilterResponse  && response.PageFilterResponse.response && response.PageFilterResponse.response.docs){
       this.filterData = response.PageFilterResponse.response.docs;
     }
     if(response.HeroResponse  && response.HeroResponse.response && response.HeroResponse.response.docs){
      this.herodata = response.HeroResponse.response.docs;
    }
    }
  };
  private getNewsData(){
    this.configService.getData(this.serviceUrl).subscribe(response =>this.populateData(response));
    //this.headerdata.getHeader(this.newslistingdata);
  }

  loadMore(){
    this.loadmoreFlag = 'loadmore';
    this.startPoint = this.startPoint + this.endPoint;
    this.getNewsData();
  }
  getParentItem(evt){
    console.log('data===');
    console.log(evt);
    this.herodata = evt;
  }

  
  
}
