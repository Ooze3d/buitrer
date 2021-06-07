import { Component, Input, OnInit } from '@angular/core';
import { Buit } from 'src/app/shared/buit.model';
import { NuevoBuitService } from '../../nuevo-buit.service';

@Component({
  selector: 'app-buit',
  templateUrl: './buit.component.html',
  styleUrls: ['./buit.component.css']
})
export class BuitComponent implements OnInit {

  @Input() buit!: Buit; //Si no ponemos el signo de admiración, nos pide que iniciemos el atributo en el constructor

  constructor(public nuevoBuitService:NuevoBuitService) {

  }

  ngOnInit(): void {
  }

  masVotoPos() {
    this.buit.setVotosPos(this.buit.getVotosPos()+1);
    this.nuevoBuitService.almacenaBuits();
  }

  masVotoNeg() {
    this.buit.setVotosNeg(this.buit.getVotosNeg()+1);
    this.nuevoBuitService.almacenaBuits();
  }

}
