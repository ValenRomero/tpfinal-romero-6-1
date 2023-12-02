import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  addProduct(product: Product){
    return this.firestore.collection('products').add(product);
  }

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  deleteProduct(productId: string){
    return this.firestore.doc('products/' + productId).delete();
  }

  updateProduct(productId: string, product: Product){
    delete product.id;
    this.firestore.doc('products/' + productId).update(product);
  }
}
