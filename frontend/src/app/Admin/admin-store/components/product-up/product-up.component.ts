import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/store/products/product';

import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/services/store/productos/product.service';


@Component({
  selector: 'app-product-up',
  templateUrl: './product-up.component.html',
  styleUrls: ['./product-up.component.sass']
})
export class ProductUpComponent implements OnInit {

  public archivos:any = [];

  category = '';

  categories!:ProductCategories[];

  productForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private productService:ProductService,
    private toastr:ToastrService) {

    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discount: [''],
      category: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      description: ['', [Validators.required]],
      information: ['', [Validators.required]],
    })

    this.productService.getAllProductCategories().subscribe(serverProductCategories => {
      this.categories = serverProductCategories;
    });

  }

  ngOnInit(): void {

  }

  captureFile(event:any):any {
    const archivoSubido = event.target.files[0];
    this.archivos.push(archivoSubido);
  }

  addProduct(){

    const PRODUCTO:Product = {
      name: this.productForm.get('name')?.value,
      price: this.productForm.get('price')?.value,
      discount: this.productForm.get('discount')?.value,
      category: this.productForm.get('category')?.value,
      imageUrl: this.productForm.get('imageUrl')?.value,
      description: this.productForm.get('description')?.value,
      information: this.productForm.get('information')?.value,
    }

    this.productService.postProduct(PRODUCTO).subscribe(data => {
      this.toastr.success('Producto agregado a la tienda', 'Producto agregado');
    }, error => {
      console.log(error);
      this.productForm.reset();
    });


  }

}
