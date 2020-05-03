import { FirestoreService } from './../servicios/firestore.service'
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { LISTADO} from '../listado'

import { Elemento} from '../clases/listado'


export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;
  private fireService: FirestoreService;
  private AngularFire: AngularFirestore;
  listado = LISTADO;

  constructor( nombre?: string, gano?: boolean,jugador?:string
    ) {

  }


  public Grabar(juego:string, gano:string){
    var getUser = window.localStorage.getItem("User")
    console.log(getUser, juego, gano);

    let elemento =  {} as Elemento;

   elemento.gano = gano;
   elemento.juego = juego;
   elemento.user = getUser;

   var localStorageactual:any = new Array<any>();
   var usuarioLogueadoEnJuego:any;


   if(localStorage.getItem("juegos")!=null){
    localStorageactual = <Array<any>> JSON.parse(localStorage.getItem("juegos"));              

  }
 
  var juegoAGuardar= {"juego":elemento.juego,"jugador":getUser,"gano":elemento.gano};
  localStorage.removeItem("juegos");
  localStorageactual.push(juegoAGuardar);
  localStorage.setItem("juegos",JSON.stringify(localStorageactual));


  
   /* this.fireService.agregarListado(data).then(() => {
      console.log('creado exitósamente!');
    }, (error) => {
      console.error(error);
    });
    */

  }

 

  public abstract verificar():boolean; 
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
