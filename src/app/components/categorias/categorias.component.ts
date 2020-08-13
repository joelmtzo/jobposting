import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias = [];

  constructor(private svcCategoria: CategoriaService) { }

  ngOnInit() {
    this.svcCategoria.getAll().subscribe(response => {
      this.categorias = response["_embedded"].categorias;
    })
  }

}
