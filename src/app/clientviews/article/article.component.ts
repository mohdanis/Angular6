import { Component, OnInit ,Input,ViewEncapsulation} from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleComponent implements OnInit {

  constructor() { }
@Input() item;
assetUrl:string = environment.MU.AssetUrl;
  ngOnInit() {
   // console.log(this.item);
  }

}
