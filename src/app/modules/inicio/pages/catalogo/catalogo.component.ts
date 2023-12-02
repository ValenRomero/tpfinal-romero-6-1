import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/modules/services/product.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  products: Product[] = [];
  productToView: Product = {
    id: '',
    title: '',
    description: '',
    price: 0,
    imageUrl: ''
  };

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data.map(e => {
        let product = e.payload.doc.data() as Product;
        product.id = e.payload.doc.id;
        return product;
      })
    });
  }

  openViewModal(product: Product) {
    this.productToView = {...product};
  }
}



