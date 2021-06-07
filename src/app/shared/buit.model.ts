import { Usuario } from '../shared/usuario.model';

export class Buit {

    private usuario:Usuario;
    private mensaje:string;
    private fecha: Date;
    private votosPos: number;
    private votosNeg: number;

    constructor(usuario:Usuario, mensaje:string) {
        this.usuario = usuario;
        this.mensaje = mensaje;
        this.fecha = new Date();
        this.votosPos = 0;
        this.votosNeg = 0;
    }

    public getUsuario() {
        return this.usuario;
    }

    public setUsuario(usuario:Usuario) {
        this.usuario = usuario;
    }

    public getMensaje() {
        return this.mensaje;
    }

    public setMensaje(mensaje:string) {
        this.mensaje = mensaje;
    }

    public getFecha() {
        return this.fecha;
    }

    public setFecha(fecha:Date) {
        this.fecha = fecha;
    }

    public getVotosPos() {
        return this.votosPos;
    }

    public setVotosPos(votosPos:number) {
        this.votosPos = votosPos;
    }

    public getVotosNeg() {
        return this.votosNeg;
    }

    public setVotosNeg(votosNeg:number) {
        this.votosNeg = votosNeg;
    }

}