
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { LISTADO } from '../../listado'
import { Elemento } from '../../clases/listado'

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  listado: Array<any>;




  constructor() {

   }

  ngOnInit() {
   
  this.listado =  this.listado = JSON.parse(localStorage.getItem("juegos")); 

    console.log(this.listado);

  }

  ver() {
  }

}
