import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/store/product.service';
import { Product } from '../../../../shared/models/store/products/product';

@Component({
  selector: 'app-shortcut-store',
  templateUrl: './shortcut-store.component.html',
  styleUrls: ['./shortcut-store.component.sass']
})
export class ShortcutStoreComponent implements OnInit {

  products:Product[] = [];

  constructor(private productoService:ProductService) {
    this.products = this.productoService.getAll();
  }

  ngOnInit(): void {
  }

}
