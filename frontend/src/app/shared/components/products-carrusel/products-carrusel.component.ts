import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/store/products/product';
import { ProductService } from 'src/app/shared/services/store/productos/product.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-products-carrusel',
  templateUrl: './products-carrusel.component.html',
  styleUrls: ['./products-carrusel.component.sass'],
  encapsulation: ViewEncapsulation.None,

})
export class ProductsCarruselComponent implements OnInit {

  products:Product[] = [];

  constructor(private productService:ProductService) {
    
    let productsObservable:Observable<Product[]>;

    productsObservable = this.productService.getAllProducts();
  }



  ngOnInit(): void {
  }


}
