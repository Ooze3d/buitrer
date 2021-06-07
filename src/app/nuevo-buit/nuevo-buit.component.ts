import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Buit } from '../shared/buit.model';
import { Usuario } from '../shared/usuario.model';
import { NuevoBuitService } from '../nuevo-buit.service';

@Component({
  selector: 'app-nuevo-buit',
  templateUrl: './nuevo-buit.component.html',
  styleUrls: ['./nuevo-buit.component.css']
})
export class NuevoBuitComponent implements OnInit {

  caracteres:number = 128;
  @Input('usuarioBuit') usuario:Usuario;
  contenidoBuit:string = '';

  @Output() buitEmitter:EventEmitter<Buit> = new EventEmitter<Buit>();

  constructor(public nuevoBuitService:NuevoBuitService) {
    this.usuario = new Usuario('anonymous','');
  }

  ngOnInit(): void {

  }

  calculaCaracteres() {
    this.caracteres = 128 - this.contenidoBuit.length;
  }

  enviarBuit() {
    this.nuevoBuitService.nuevoBuit(this.usuario, this.contenidoBuit);
    console.log(this.nuevoBuitService.listaBuits);
    this.contenidoBuit = '';
    this.caracteres = 128;
  }

}
