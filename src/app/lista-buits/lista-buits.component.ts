import { Component, OnInit } from '@angular/core';
import { NuevoBuitService } from '../nuevo-buit.service';

@Component({
  selector: 'app-lista-buits',
  templateUrl: './lista-buits.component.html',
  styleUrls: ['./lista-buits.component.css']
})
export class ListaBuitsComponent implements OnInit {


  constructor(public nuevoBuitService:NuevoBuitService) { }

  ngOnInit(): void {
    this.nuevoBuitService.recuperaBuits();
  }

}
