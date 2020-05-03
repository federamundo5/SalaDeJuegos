import { Component, OnInit } from '@angular/core';
import { JuegoTateti } from '../../clases/juego-ta-te-ti'

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  juego: JuegoTateti;
  turnoJugador:boolean = false;
  cuentaMarcas:number = 0;
  Mensajes: string;
  imgX: string = './././assets/imagenes/TaTeTiX.png'
  imgO: string = './././assets/imagenes/TaTeTiO.png'

  constructor() 
  {
    this.juego = new JuegoTateti();
  }

  ngOnInit() {
    this.NuevoJuego();
  }

  NuevoJuego()
  {
    this.juego.enJuego = true;
    this.juego.sacarJuego = false;
    this.turnoJugador = true;
    this.cuentaMarcas = 0;
  }

  GenerarJugada() 
  {
    let row = Math.floor(Math.random() * 3);
    let col = Math.floor(Math.random() * 3);
    this.marcarJugada(row, col, true);
  }


  marcarJugada(row: number, column: number, jugadaGenerada: boolean) 
  {
    if (jugadaGenerada) 
    {
      if (this.juego.tablero[row][column] != "" && this.cuentaMarcas < 9) 
      {
        this.GenerarJugada()
      }
      else
      {
        this.cuentaMarcas++;
        this.juego.tablero[row][column] = this.imgX;
        this.turnoJugador = true;
        if(this.juego.verificarVictoria(this.imgX))
        {
          if(!this.juego.verificar())
          {
            this.MostarMensaje("Perdiste", false);
            let segundos = 2;
            let intervalo = setInterval(()=>
            {
              segundos = segundos -1;
              if(segundos == 0)
              {
                this.juego.resetar();
                clearInterval(intervalo);
                this.NuevoJuego();
              }
            },1000);
          }
        }
      }
    } 
    else 
    {
      if (this.juego.tablero[row][column] == "") 
      {
        this.cuentaMarcas++;
        this.juego.tablero[row][column] = this.imgO;
        this.turnoJugador = false;
        if (!this.juego.verificarVictoria(this.imgO)) 
        {
          setTimeout(() => {
            this.GenerarJugada();
          }, 400);
        }
        else
        {
          this.MostarMensaje("Ganaste", true);

          let segundos2 = 2;
          let intervalo2 = setInterval(()=>
          {
            segundos2 = segundos2 -1;
            if(segundos2 == 0)
            {
              this.juego.resetar();
              clearInterval(intervalo2);
                  this.NuevoJuego();

            }
          },1000);
        }
      }
    }
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
        this.juego.Grabar("TaTeTi", "Gano");
      }else{
        x.className = "show Perdedor";
        this.juego.Grabar("TaTeTi", "Perdio");
      }
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
     }, 3000);
    console.info("objeto",x);
  
   }
  
}
