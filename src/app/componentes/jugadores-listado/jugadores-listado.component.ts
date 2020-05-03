import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:any
  miJugadoresServicio:JugadoresService
   listaJugadores: any;


 usersArray: Array<string>;

    constructor(serviceJugadores:JugadoresService) {
      this.miJugadoresServicio = serviceJugadores;
      
    }
    


  ngOnInit() {
    this.usersArray = new Array();

   var victorias = {};
   var derrotas  ={};
   var data = [];

   this.listado =  JSON.parse(localStorage.getItem('juegos'));


   for (var i = 0; i < this.listado.length; i++) {
    if(!this.usersArray.includes(this.listado[i].jugador))
    this.usersArray.push(this.listado[i].jugador);
  }

  this.usersArray.forEach(element => {
    let Victorias =  JSON.parse(localStorage.getItem('juegos')).filter(juegos => juegos.gano === "Gano" &&  juegos.jugador ==  element).length;
    let Derrotas =  JSON.parse(localStorage.getItem('juegos')).filter(juegos => juegos.gano === "Perdio" &&  juegos.jugador ==  element).length;
    var temp = new Object();
    temp["user"] = element;
    temp["victorias"] = Victorias;
    temp["derrotas"] = Derrotas;
    data.push(temp);
  });

  this.listaJugadores = data;
this.listado = this.listaJugadores;
  console.log(this.listaJugadores);
}



  
  TraerTodos(){

  this.listado  = this.listaJugadores;


  }


  TraerGanadores(){
    this.listado = this.listaJugadores.filter(jugador => jugador.victorias > 0);
    this.listado.sort((a, b) => (b.victorias > a.victorias) ? 1 : -1)


  }
  TraerPerdedores(){
    this.listado = this.listaJugadores.filter(jugador => jugador.derrotas > 0);
    this.listado.sort((a, b) => (b.derrotas > a.derrotas) ? 1 : -1)

  }

}
