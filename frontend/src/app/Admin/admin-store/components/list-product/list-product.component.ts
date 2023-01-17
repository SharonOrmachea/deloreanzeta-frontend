import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../shared/services/store/productos/product.service';
import { Product } from '../../../../shared/models/store/products/product';
import { ToastrService } from 'ngx-toastr';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductCategories } from 'src/app/shared/models/store/category/product-tag';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.sass']
})
export class ListProductComponent implements OnInit {

  listProducts:Product[] = [];

  public archivos:any = [];

  categories!:ProductCategories[];

  productForm:FormGroup;

  constructor(
    private productService:ProductService,
    private fb:FormBuilder,
    private toastr:ToastrService) {

    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      discount: [''],
      category: [''],
      imageUrl: [''],
      description: [''],
      information: [''],
    })

    this.productService.getAllProductCategories().subscribe(serverProductCategories => {
      this.categories = serverProductCategories;
    });

  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  captureFile(event:any):any {
    const archivoSubido = event.target.files[0];
    this.archivos.push(archivoSubido);
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(data => {
      this.listProducts = data;
    }, error => {
      console.log(error)
    })
  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe(data => {
      this.toastr.success('El producto fue eliminado con exito', 'Producto Eliminado');
      this.getAllProducts();
    }, error => {
      console.log(error);
    })
  }

}
