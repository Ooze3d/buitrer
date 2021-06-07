import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buit } from './shared/buit.model';
import { Usuario } from './shared/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class NuevoBuitService {

  newBuit!: Buit;
  listaBuits: Buit[] = [];
  listaUsuariosTemp: Usuario[] = [];

  constructor(private http:HttpClient) { }

  nuevoBuit(user:Usuario, contenido:string) {
    this.newBuit = new Buit(user, contenido);
    this.listaBuits.push(this.newBuit);
    this.almacenaBuits();
  }

  getListaBuits() {
    return this.listaBuits;
  }

  setListaBuits(listaBuits:Buit[]) {
    this.listaBuits = listaBuits;
  }

  almacenaBuits() {
    this.http.put('https://buitrer-app-default-rtdb.europe-west1.firebasedatabase.app/listaBuits.json', this.listaBuits).subscribe((responseData) => {console.log(responseData)});
  }

  recuperaBuits() { //El método convierteDatos es un parche ante un fallo de tipo. Aunque especifico que devuelva un array de Buit, devuelve un objeto JSON similar, pero no del mismo tipo
    //Ante la necesidad de entregar el proyecto esta misma noche, creo el método convierteDatos() para crear objetos Buit reales
    this.http.get<any[]>('https://buitrer-app-default-rtdb.europe-west1.firebasedatabase.app/listaBuits.json').subscribe((lista) => { this.convierteDatosBuits(lista); });
  }

  convierteDatosBuits(lista:any[]) {
    this.listaBuits = [];
    for(let item of lista) {
      let usuarioTemp = new Usuario(item.usuario.username, item.usuario.password);
      let buit = new Buit(usuarioTemp, item.mensaje);
      buit.setFecha(item.fecha);
      buit.setVotosPos(item.votosPos);
      buit.setVotosNeg(item.votosNeg);
      this.listaBuits.push(buit);
    }
  }

  almacenaUsuarios(listaUsuarios:Usuario[]) {
    this.http.put('https://buitrer-app-default-rtdb.europe-west1.firebasedatabase.app/listaUsuarios.json', listaUsuarios).subscribe((responseData) => {console.log(responseData)});
  }

  recuperaUsuarios() {
    this.http.get<any[]>('https://buitrer-app-default-rtdb.europe-west1.firebasedatabase.app/listaUsuarios.json').subscribe((lista) => { this.convierteDatosUsuarios(lista); });
  }

  convierteDatosUsuarios(lista:any[]) {
    this.listaUsuariosTemp = [];
    for(let item of lista) {
      let usuarioTemp = new Usuario(item.username, item.password);
      this.listaUsuariosTemp.push(usuarioTemp);
    }
  }

}
