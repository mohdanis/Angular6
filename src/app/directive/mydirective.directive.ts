import { Directive,ElementRef,Renderer,HostListener } from '@angular/core';
import * as $ from 'jQuery';
import {test,getUtils} from '../../assets/js/Utils.js';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { 
   // renderer.setElementStyle(el.nativeElement, 'display', 'none');
   el.nativeElement.style.fontSize = '100px'
   $(el.nativeElement).css('color','red');
  const Utils = getUtils();
  Utils.jstest();
   
  }
  @HostListener('mouseenter')onmouseenter(){
    this.el.nativeElement.style.fontSize = '200px'
  }
  @HostListener('mouseleave')onmouseleave(){
    this.el.nativeElement.style.fontSize = '100px'
  }
 
}
