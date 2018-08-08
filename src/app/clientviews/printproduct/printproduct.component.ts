import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-printproduct',
  templateUrl: './printproduct.component.html',
  styleUrls: ['./printproduct.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PrintproductComponent implements OnInit {

  constructor() { }
  @Input() item;
  ngOnInit() {
  }

}
