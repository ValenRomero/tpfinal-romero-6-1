import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  product: Product = {
    id: '',
    title: '',
    description: '',
    price: 0,
    imageUrl: ''
  };

  constructor(private productService: ProductService) { }

  onSubmit() {
    this.productService.addProduct(this.product);
  }
}
