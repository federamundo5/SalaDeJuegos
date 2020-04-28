import { Juego } from '../clases/juego'


export class JuegoAgilidad extends Juego {
    numero1: number = 0;
    numero2: number = 0;
    solucion: number = 0;
    operadores:Array<string> = ["+","-","*","/"];
    operador: string;
    numeroIngresado = 0;
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Juego Agilidad",gano,jugador);    
      }
    public verificar() {
        if (this.numeroIngresado == this.solucion) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
     public generarValores() {
        this.numero2 = Math.floor((Math.random() * 100) + 1);
        this.numero1 = Math.floor((Math.random() * 100) + 1);
        this.operador = this.operadores[ Math.floor( ( Math.random() * this.operadores.length ) ) ];
        if (this.numero2 == 0 && this.operador == " /")
        {
            this.operador = "+";
        }
        this.gano = false;

        this.Solucion();
      }

      public Solucion()
      {
        switch(this.operador){
            case "+":
            this.solucion = this.numero1 + this.numero2;
            break;
            case "-":
            this.solucion = this.numero1 - this.numero2;
            break;
            case "*":
            this.solucion = this.numero1 * this.numero2;
            break;
            case "/":
            this.solucion = Math.floor(this.numero1 / this.numero2);
            break;
        }
      }


}
