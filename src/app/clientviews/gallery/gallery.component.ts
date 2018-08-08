import { Component, OnInit,Input ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent implements OnInit {

  constructor() { }
@Input() item;
  ngOnInit() {
  }

}
