import { Component, OnInit } from "@angular/core";
import { EstadoService } from "src/app/services/estado.service";

@Component({
  selector: "estados",
  templateUrl: "./estados.component.html",
  styleUrls: ["./estados.component.css"],
})
export class EstadosComponent implements OnInit {
  estados = [];

  constructor(private svcEstado: EstadoService) {}

  ngOnInit() {
    this.svcEstado.getEstados().subscribe((response) => {
      this.estados = response["_embedded"].estados;
    });
  }
}
