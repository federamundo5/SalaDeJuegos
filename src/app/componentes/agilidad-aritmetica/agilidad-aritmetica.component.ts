import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  Mensajes:string;
  jugando: boolean;

  private subscription: Subscription;
  ngOnInit() {
  }
   constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
     this.jugando = false;
     this.nuevoJuego = new JuegoAgilidad();
     console.log("enInit");
     this.nuevoJuego.numero2 = 0;
     this.nuevoJuego.numero2 = 0;

    
  }


  NuevoJuego() {
    this.ocultarVerificar=false;
    this.jugando = true;
    this.repetidor = setInterval(()=>{ 
      this.Tiempo--;
      console.log("Tiempo restante:", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
        this.enviarJuego.emit(this.nuevoJuego);
      }
    }, 900);


this.nuevoJuego.generarValores();

    console.info(this.nuevoJuego );  
    console.info("Nuevos Valores");
    console.log("enNuevo");

  }



  verificar()
  {
    console.log("enVerificar");

    let mensaje:string;
    this.jugando = false;

    if (this.nuevoJuego.verificar()) 
   {
      this.ocultarVerificar=true;

      this.nuevoJuego.gano=true;
      this.enviarJuego.emit(this.nuevoJuego);
      clearInterval(this.repetidor);
      console.log("ganaste");
      mensaje="Ganaste";
      this.MostarMensaje(mensaje,true);
      console.info(this.nuevoJuego);
    }
    else
    {
      mensaje="Perdiste";
      this.MostarMensaje(mensaje);
      

    }
    
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
     }, 3000);
    console.info("objeto",x);
  
   }  
    
}
