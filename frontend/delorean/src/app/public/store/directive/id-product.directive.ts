import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIdProduct]'
})
export class IdProductDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  changeImage(){
    let source:any = this.el.nativeElement.src;
    let prev:any = document.getElementById("preview");
    prev.src = source;
    let imageSlide = document.getElementsByClassName("imageSlide");
    for(let i=0; i < imageSlide.length; i++){
      imageSlide[i].classList.remove("active");
    }
    this.el.nativeElement.parentElement.classList.add("active")
  }

}
