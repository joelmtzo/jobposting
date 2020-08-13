import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
import { TokenAuthInterceptor } from './interceptors/token-auth.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { EstadosComponent } from './components/estados/estados.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    NotFoundComponent,
    PaginationComponent,
    EstadosComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
/*         blacklistedRoutes: [
          environment.apiUrl,
          environment.apiUrl + "login"
        ], */
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
