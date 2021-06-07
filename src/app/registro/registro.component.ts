import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  username!:string;
  password!:string;
  usuario!:Usuario;
  error:string = '';
  @Output() registroEmitter:EventEmitter<Usuario> = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {

  }

  onUsuarioRegistro() {
    if(this.username!=undefined && this.password!=undefined) {
      this.usuario = new Usuario(this.username, this.password);
      this.registroEmitter.emit(this.usuario);
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
