import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/store/productos/product.service';
import { ValidationsService } from 'src/app/shared/services/validations/validations.service';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';
import { CategoryService } from '../../../../../shared/services/store/category/category.service';

enum Action {
  EDIT = 'edit',
  NEW = 'new'
}

@Component({
  selector: 'app-product-up',
  templateUrl: './product-up.component.html',
  styleUrls: ['./product-up.component.sass']
})
export class ProductUpComponent implements OnInit {

  productForm:FormGroup;

  categories!:ProductCategories[];

  actionToDo = Action.NEW;

  public archivos:string[]= [];

  constructor(
    private productService:ProductService,
    private categoriesService:CategoryService,
    private formBuilder:FormBuilder,
    private validatorService:ValidationsService,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discount: [''],
      finalPrice: [''],
      category: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      description: ['', [Validators.required]],
      information: ['', [Validators.required]],
    });

    this.categoriesService.getAllProductCategories().subscribe(serverProductCategories => {
      this.categories = serverProductCategories;
    });

  }

  ngOnInit(): void {
    if(this.data?.products.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.data.title = 'Editar Producto';
      this.productForm.get('name')?.setValidators(null);
      this.productForm.get('price')?.setValidators(null);
      this.productForm.get('category')?.setValidators(null);
      this.productForm.get('imageUrl')?.setValidators(null);
      this.productForm.get('description')?.setValidators(null);
      this.productForm.get('information')?.setValidators(null);
      this.pathFormData();

    }
  }

  saveProduct(){
    const valueProduct = {
      name: this.productForm.get('name')?.value,
      price: this.productForm.get('price')?.value,
      discount: this.productForm.get('discount')?.value,
      category: this.productForm.get('category')?.value,
      imageUrl: this.archivos,
      description: this.productForm.get('description')?.value,
      information: this.productForm.get('information')?.value,
    };

    if(this.actionToDo == Action.NEW){
      this.productService.newProduct(valueProduct).subscribe((res) => {
        this.toastr.success('Producto agregado a la tienda', 'Producto agregado');
        this.productForm.reset();
      }, (error) => {
        this.toastr.error(error, 'Product Failed');
      }
      );
    } else if(this.actionToDo == Action.EDIT){
      const productId = this.data?.products?.id;
      this.productService.updateProduct(productId, valueProduct).subscribe((res) => {
        this.toastr.success('La noticia fue editada con exito', 'Noticia Editada');
      }, error => {
        this.toastr.error(error, 'News Failed');
      })
    }

  }

  captureFile(event: any) {
    for (let i = 0; i < event.length; i++) {
      const reader = event[i].base64;
      this.archivos.push(reader);
    }
  }

  private pathFormData():void {
    this.productForm.patchValue({
      name: this.data?.products?.name,
      price: this.data?.products?.price,
      discount: this.data?.products?.discount,
      category: this.data?.products?.category,
      description: this.data?.products?.description,
      information: this.data?.products?.information,
    });
    this.archivos = this.data?.products?.imageUrl;
  }

  get formControls() {
    return this.productForm.controls;
  }

  getErrorMessage(field:string): string{
    return this.validatorService.getErrorMessage(field, this.productForm);
  }

  isValidField(field:string): boolean{
    return this.validatorService.isValidField(field, this.productForm);
  }

}
