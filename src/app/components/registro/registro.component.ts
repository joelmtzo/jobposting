import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuarioCreado = '';
  candidato: any;

  form = new FormGroup({
    "nombre":     new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
    "apellidos":  new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
    "email":      new FormControl('', [Validators.required, Validators.email]),
    "password":   new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    "cpassword":  new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)])
  });

  constructor(private svcRegistro: RegistroService,
              private router: Router) { }

  signUp(form){
    this.svcRegistro.create( this.buildObject(form) )
    .subscribe(response => {
      
      if(response.body.toString() == 'true') {
/*         Swal.fire(
          'Registro completado',
          'Ya puedes iniciar sesión con tu cuenta',
          'success'
        ) */

        this.formReset();
      }
      
    });

    /* let usuario = this.buildUsuario(form);

    this.svcRegistro
      .createUsuario(usuario)
      .subscribe(response => {
        this.usuarioCreado = response.body['idusuario'];

        this.candidato = this.buildCandidato(form, this.usuarioCreado);

        this.svcRegistro
          .create(this.candidato)
          .subscribe(response => {

            if(response.status == 201) {
              Swal.fire(
                'Registro completado',
                'Ya puedes iniciar sesión con tu cuenta',
                'success'
              )

              this.formReset();
            }

          });
      });  */
  }

  buildObject(form) {
    return {
      candidato: {
        nombre: form.nombre,
        apellidos: form.apellidos
      },
      usuario: {
        email : form.email,
        password : form.password,
        fechaRegistro : new Date(),
        roles: [{
          id: 2 // 2 = id para ROLE_USER
        }],
        admEstatus : true
      }
    }
  }

/*   buildCandidato(data, usuarioCreado){
    return {
      "nombre": data.nombre,
      "apellidos": data.apellidos,
      "usuarioId": { "idusuario": usuarioCreado }
    }
  }

  buildUsuario(data){
    return {
      "email" : data.email,
      "password" : data.password,
      "fechaRegistro" : new Date(),
      "admEstatus" : true
    }
  } */

  formReset(){
    this.form.setValue({
      "nombre": '',
      "apellidos": '',
      "email": '',
      "password": '',
      "cpassword": ''
    })
  }

  get nombre(){ return this.form.get("nombre") }
  get apellidos(){ return this.form.get("apellidos") }
  get email(){ return this.form.get("email") }
  get password(){ return this.form.get("password") }
  get cpassword(){ return this.form.get("cpassword") }

}
