import { Component, OnInit } from '@angular/core';
import { ElectroService } from 'src/app/modules/admin/services/electro.service'; // Asegúrate de importar tu servicio de productos
import { Electro } from 'src/app/models/electro';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'], // Ajusta la ruta según tu estructura de archivos
})
export class CatalogoComponent implements OnInit {
  productos: Electro[] = []; // Lista de productos

  constructor(private ElectroService: ElectroService) {} // Inyecta el servicio de productos

  ngOnInit(): void {
    // Carga los datos de productos al inicializar el componente
    this.loadProducts();
  }

  loadProducts() {
    // Llama al servicio para obtener los productos desde tu fuente de datos (por ejemplo, Firestore)
    this.ElectroService.getElectro().subscribe((data: Electro[]) => {
      this.productos = data; // Asigna los productos a la lista
    });
  }
}
