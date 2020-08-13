import { Component, OnInit } from "@angular/core";
import { ListadoService } from "../../services/listado.service";

@Component({
  selector: "app-listado",
  templateUrl: "./listado.component.html",
  styleUrls: ["./listado.component.css"],
})
export class ListadoComponent implements OnInit {
  vacantes = [];
  pagination = [];
  page = 0;

  constructor(private svcListado: ListadoService) {}

  ngOnInit() {
    this.svcListado.getListadoWithPagination("")
      .subscribe((response) => {
        this.cargarVacantesPaginacion(response);
      });
  }

  cargarVacantesPaginacion(response) {
    this.vacantes = response["_embedded"].vacantes;
    this.pagination = response["_links"];
    this.page = response["page"].number;
  }

  cambiarPagina(link) {
    this.svcListado.getListadoWithPagination(link)
      .subscribe((response) => {
        this.cargarVacantesPaginacion(response);
      });
  }
}
