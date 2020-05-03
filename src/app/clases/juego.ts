import { FirestoreService } from './../servicios/firestore.service'
import { AngularFirestore } from '@angular/fire/firestore/firestore';



export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;
  private fireService: FirestoreService;
  private AngularFire: AngularFirestore;

  constructor( nombre?: string, gano?: boolean,jugador?:string
    ) {

  }


  public Grabar(juego:string, gano:string){
    var getUser = window.localStorage.getItem("User")
    console.log(getUser, juego, gano);


 

   var localStorageactual:any = new Array<any>();
   var usuarioLogueadoEnJuego:any;


   if(localStorage.getItem("juegos")!=null){
    localStorageactual = <Array<any>> JSON.parse(localStorage.getItem("juegos"));              

  }
 
  var juegoAGuardar= {"juego":juego,"jugador":getUser,"gano":gano};
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
