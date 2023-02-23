import { Component, OnInit } from '@angular/core';

import { Product } from '../../../../../shared/models/store/products/product';

import { ProductService } from '../../../../../shared/services/store/productos/product.service';
import { ToastrService } from 'ngx-toastr';

import { ProductUpComponent } from '../product-up/product-up.component';
import { MatDialog } from '@angular/material/dialog';
import { BannerUpComponent } from '../../banner/banner-up/banner-up.component';
import { CategoriesUpComponent } from '../../categories/categories-up/categories-up.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.sass']
})
export class ListProductComponent implements OnInit {

  listProducts:Product[] = [];

  constructor(
    private productService:ProductService,
    private toastr:ToastrService,
    private dialog: MatDialog
    ) {

  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  openModalProduct(products={}):void {
    this.dialog.open(ProductUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Producto', products}

    });
  }

  openModalCategory(category={}):void {
    this.dialog.open(CategoriesUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Categoría', category}

    });
  }

  openModalBanner(banner={}):void {
    this.dialog.open(BannerUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Banner', banner}

    });
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
      this.toastr.success(error, 'Failed Delete');
    })
  }

}
