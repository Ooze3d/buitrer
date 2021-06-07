import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

  @Input('usuarioMenu') usuario:Usuario;
  
  logged:boolean = false;

  @Output() modoEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() menuEmitter:EventEmitter<Usuario> = new EventEmitter<Usuario>();

  constructor() {
    this.usuario = new Usuario('anonymous','');
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes:SimpleChanges) { //Ejecutado si nota algún cambio (por ejemplo cuando cambie el usuario después de hacer login)
    if(this.usuario.getUsername()!='anonymous')
      this.logged = true; //Necesario para el cambio de elementos del menu
  }

  logOut() {
    this.usuario = new Usuario('anonymous','');
    this.logged = false;
    this.modoEmitter.emit('login');
    this.menuEmitter.emit(this.usuario);
  }

  cambiaModo(modo:string) {
    this.modoEmitter.emit(modo);
  }

}