import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/store/productos/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [ProductService]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
