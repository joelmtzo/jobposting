import { Component, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
import { map } from "rxjs/operators";
import { CategoriaService } from "../../services/categoria.service";
import { EstadoService } from "../../services/estado.service";
import { ListadoService } from "../../services/listado.service";

@Component({
  selector: "app-listado",
  templateUrl: "./listado.component.html",
  styleUrls: ["./listado.component.css"],
})
export class ListadoComponent implements OnInit {
  vacantes = [];
  categorias = [];
  estados = [];

  pagination = [];
  page = 0;
  size = 10;

  constructor(
    private svcListado: ListadoService,
    private svcCategoria: CategoriaService,
    private svcEstado: EstadoService
  ) {}

  ngOnInit() {
    forkJoin([
      this.svcListado.getListadoWithPagination(""),
      this.svcEstado.getEstados(),
      this.svcCategoria.getAll(),
    ])
      .pipe(map((response) => response))
      .subscribe((response) => {
        this.cargarVacantesPaginacion(response[0]);

        this.estados = response[1]["_embedded"].estados;
        this.categorias = response[2]["_embedded"].categorias;
      });
  }

  cargarVacantesPaginacion(response){
    this.vacantes = response["_embedded"].vacantes;
    this.pagination = response["_links"];
    this.page = response["page"].number;
  }

  cambiarPagina(link) {
    this.svcListado
      .getListadoWithPagination(link)
      .subscribe(
        response => {
          this.cargarVacantesPaginacion(response);
        }
      );
  }
}
