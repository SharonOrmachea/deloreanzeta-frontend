import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appIdProduct]'
})
export class IdProductDirective {

  constructor(private el:ElementRef) { }

  imagen = true;

  @HostBinding('class.active') get active() {
    let imageSlide = document.getElementsByClassName("imageSlide");
    if (this.imagen === true){
      this.imagen = false
      return imageSlide[0].classList.add("active");
    }

  }

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
