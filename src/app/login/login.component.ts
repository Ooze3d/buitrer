import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:string;
  password!:string;
  usuario!:Usuario;
  error:string = '';
  @Output() usuarioEmitter:EventEmitter<Usuario> = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {

  }

  onUsuarioLogin() { //Método que se llama al hacer click y que emite un evento con el usuario que pretende hacer login
    if(this.username!=undefined && this.password!=undefined) {
      this.usuario = new Usuario(this.username, this.password);
      this.usuarioEmitter.emit(this.usuario);
      this.username = '';
      this.password = '';
    } else {
      this.error = 'No puede haber campos vacíos!';
      setTimeout(() => {
        this.error = '';
      },2000);
    }
  }

}