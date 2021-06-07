import { Component, OnInit } from '@angular/core';
import { Usuario } from './shared/usuario.model';
import { NuevoBuitService } from './nuevo-buit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title:string = 'buitrer-app';
  login:boolean = false;
  usuario:Usuario;
  seccion:string = 'registro';

  listaUsuarios:Usuario[] = [
    new Usuario('user', '0000')
  ]; //Lista que sacamos de la base de datos

  error:string = '';
  exito:string = '';

  constructor(public nuevoBuitService:NuevoBuitService) {
    this.usuario = new Usuario('anonymous',''); //Usuario por defecto antes de hacer login
  }

  ngOnInit():void {
    this.nuevoBuitService.recuperaUsuarios();
    setTimeout(() => {
      this.listaUsuarios = this.nuevoBuitService.listaUsuariosTemp;
    }, 2000); //TODO: Demasiado aleatorio. Tiene que haber una forma mejor.
  }

  onLogin(event:Usuario) { //Capturamos el evento que ha generado loginComponent y que ha devuelto el usuario que quiere hacer login
    let usuarioTemp:Usuario = event;
    if(this.findUser(usuarioTemp)) { //Comprobamos con la lista de usuarios si el usuario puede hacer login
      this.usuario = usuarioTemp; //Si puede hacer login, mandamos el usuario logueado al resto de los componentes que lo necesiten (concretamente MENU y NUEVO-BUIT)
      this.error = '';
      this.exito = 'Usuario correcto!';
      this.login = true;
      this.seccion = 'nuevo';
      setTimeout(() => {
        this.exito = '';
      },2000);
    } else
      this.error = 'El usuario no existe. Si quiere, puede registrarlo.';
  }

  onRegistro(event:Usuario) { //Capturamos el evento que ha generado registroComponent y que ha devuelto el usuario que quiere registrarse
    let usuarioTemp:Usuario = event;
    if(!this.findLogin(usuarioTemp)) { //Comprobamos con la lista de usuarios si el usuario está ya registrado
      this.listaUsuarios.push(usuarioTemp);
      this.error = '';
      this.exito = 'Usuario registrado!';
      this.nuevoBuitService.almacenaUsuarios(this.listaUsuarios);
      setTimeout(() => {
        this.exito = '';
      },2000);
    } else
      this.error = 'El usuario ya existe. Debe elegir otro nombre.';
  }

  onLogout(event:Usuario) {
    this.login = false;
    this.usuario = event;
  }

  cambiaSeccion(event:string) {
    this.seccion = event;
  }

  findUser(user:Usuario):boolean { //Includes no parece funcionar correctamente con objetos (probablemente haya que implementar un equals en la clase modelo)
    for(let item of this.listaUsuarios) {
      if((user.getUsername()===item.getUsername())&&(user.getPassword()===item.getPassword()))
        return true;
    }
    return false;
  }

  findLogin(user:Usuario):boolean { //Solo para comparar el nombre de usuario
    for(let item of this.listaUsuarios) {
      if(user.getUsername()===item.getUsername())
        return true;
    }
    return false;
  }
  
}