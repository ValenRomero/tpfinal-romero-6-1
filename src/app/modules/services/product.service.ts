import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AngularFirestore } from '@angular/fire/compat/firestore';


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
}
