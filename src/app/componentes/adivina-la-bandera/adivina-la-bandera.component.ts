import { Component, OnInit } from '@angular/core';
import { FlagsService } from '../../servicios/flags.service'
import { JuegoAdivinaLaBandera } from '../../clases/adivina-la-bandera'


@Component({
  selector: 'app-adivina-la-bandera',
  templateUrl: './adivina-la-bandera.component.html',
  styleUrls: ['./adivina-la-bandera.component.css','../../../../node_modules/flag-icon-css/css/flag-icon.css']
})
export class AdivinaLaBanderaComponent implements OnInit {

  nuevoJuego : JuegoAdivinaLaBandera;
  Mensajes:string;

  constructor() 
  {
    this.nuevoJuego = new JuegoAdivinaLaBandera();
  }



  ngOnInit(): void {
    this.nuevoJuego.Jugar();
  }


  Verificar()
  {
    console.log(this.nuevoJuego.PaisElegido);
    let mensaje:string;

    if (this.nuevoJuego.verificar()) 
   {

    mensaje="Ganaste";
    this.MostarMensaje(mensaje,true);
    this.nuevoJuego.Jugar();


     }
      else{  
          mensaje="Perdiste";
          this.MostarMensaje(mensaje);      
          this.nuevoJuego.Jugar();
          }
     }

     Pasar()
     {
      this.nuevoJuego.Jugar();
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

 }  


}


