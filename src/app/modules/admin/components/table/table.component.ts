import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/modules/services/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  products: Product[] = [];
  productToEdit: Product = {
    id: '',
    title: '',
    description: '',
    price: 0,
    imageUrl: '',
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    //Se traen los productos de la base de datos y se recorren uno por uno para mostrarlos seguidamente en la tabla
    this.productService.getProducts().subscribe((data) => {
      this.products = data.map((e) => {
        let product = e.payload.doc.data() as Product;
        product.id = e.payload.doc.id;
        return product;
      });
    });
  }
  //Metodo para borrar el producto
  deleteProduct(product: Product) {
    // Confirmacion para verificar que se quiera eliminar el producto
    const confirmacion = confirm(
      'Desea borrar el producto ' + product.title + ' ?'
    );
    //if para verificar la respuesta
    if (confirmacion) {
      this.productService.deleteProduct(product.id);
    }
  }

  openEditModal(product: Product) {
    this.productToEdit = { ...product };
  }
  //Metodo editar producto
  editProduct() {
    //Constante confirmacion para preguntar si es seguro que se quiere editar
    const confirmacion = confirm('Desea editar el producto ?');
    // Se comprueba la respuesta si es verdadera o falsa
    if (confirmacion) {
      // Si es verdadera se edita el producto
      this.productService.updateProduct(
        this.productToEdit.id,
        this.productToEdit
      );
    }
  }
}
