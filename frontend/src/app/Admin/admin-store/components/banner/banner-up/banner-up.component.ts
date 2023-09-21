import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BannerService } from '../../../../../shared/services/store/banner/banner.service';

enum Action {
  EDIT = 'edit',
  NEW = 'new'
}

@Component({
  selector: 'app-banner-up',
  templateUrl: './banner-up.component.html',
  styleUrls: ['./banner-up.component.sass']
})

export class BannerUpComponent implements OnInit {

  bannerForm!:FormGroup;

  selectedFile: File | null = null;
  public archivos:string[]= [];

  actionToDo = Action.NEW;

  constructor(
    private bannerService:BannerService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.bannerForm = this.formBuilder.group({
      imageUrl: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if(this.data?.products.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.data.title = 'Editar Banner';
      this.pathFormData();
    }
  }

  saveBanner(){
    const valueBanner = {
      imageUrl: this.archivos,
    };

    if(this.actionToDo == Action.NEW){
      this.bannerService.newBanner(valueBanner).subscribe((res) => {
        this.toastr.success('Producto agregado a la tienda', 'Producto agregado');
        this.bannerForm.reset();
      }, (error) => {
        this.toastr.error(error, 'Product Failed');
      }
      );
    // } else if(this.actionToDo == Action.EDIT){
    //   this.bannerService.updateProduct(valueBanner).subscribe((res) => {
    //     this.toastr.success('La noticia fue editada con exito', 'Noticia Editada');
    //   }, error => {
    //     this.toastr.error(error, 'News Failed');
    //   })
    }

  }

  captureFile(event:any): void{
    //this.archivo = event[0].base64;
    this.selectedFile = event.target.files[0];
    if(this.selectedFile){
      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.archivos = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  private pathFormData():void {
    this.bannerForm.patchValue({
      imageUrl: this.data?.banner?.imageUrl
    });
    this.archivos = this.data?.products?.imageUrl;
  }

}
