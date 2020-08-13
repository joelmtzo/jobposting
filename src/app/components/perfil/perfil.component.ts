import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  /* candidato: Candidato = []; */

  constructor(private http: HttpClient) { }

  ngOnInit() {
    /* this.http.get(environment.apiUrl + 'buscarCandidato', { observe: 'response' })
      .subscribe(response => this.candidato = response.body); */

  }

}
