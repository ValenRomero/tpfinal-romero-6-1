import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  product = {
    id: '',
    titulo: '',
    descripcion: '',
    precio: '',
    urlImagen: ''
  };

  constructor(private modal: NgbActiveModal, private firestore: AngularFirestore) {}

  saveProduct() {
    this.firestore.collection('products').doc(this.product.id).set(this.product)
      .then(() => {
        console.log('Producto guardado exitosamente');
        this.modal.close();
      })
      .catch(error => {
        console.error('Error al guardar el producto: ', error);
      });
  }

  dismiss() {
    this.modal.dismiss();
  }
}
