import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/store/products/product';
import { ProductService } from 'src/app/shared/services/store/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})

export class ProductsComponent implements OnInit {


  products:Product[] = [];

  constructor(private productService:ProductService) {
    this.products = this.productService.getAll();
  }

  ngOnInit(): void {
  }

}
