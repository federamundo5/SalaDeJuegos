import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama'

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {


  juego: JuegoAnagrama;
  ocultarVerificar:boolean = false;
  Mensajes: string;

  constructor() 
  {
    this.juego = new JuegoAnagrama();
  }

  ngOnInit() {
  }

  Jugar()
  {
    this.juego.Configurar();
    this.ocultarVerificar = true;
    this.juego.ArmarPalabra();
  }

  Verificar()
  {
    this.ocultarVerificar = false;

    if(this.juego.verificar())
    {      
      this.juego.Grabar("Anagrama", "Gano");
      this.MostarMensaje("Ganaste", true);
    }
    else
    {
      this.juego.Grabar("Anagrama", "Perdio");
      this.MostarMensaje("Perdiste", false);
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
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }
}
