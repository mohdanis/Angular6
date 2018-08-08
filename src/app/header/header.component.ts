import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private router:Router) { }
   homeId:any;
  ngOnInit() {
    //this.getHeader()
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.activeRoute.params.subscribe((params:Params)=>{
      this.homeId = params['id'];
      console.log('homeid===',params);
    })
    console.log('homeidID===',id);
  }
getHeader(data:any){
  console.log(data);
}
gotToHome(){
  this.router.navigate(['/home',123], {relativeTo :this.activeRoute});
}
}
