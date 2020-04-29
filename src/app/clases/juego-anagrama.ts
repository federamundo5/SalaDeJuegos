import { Juego } from '../clases/juego'

export class JuegoAnagrama extends Juego 
{

    palabra: number = 0;
    palabraUsuario: string = "";
    palabraDesordenada: string = "";

    public palabras: {[id: number]: string;} = {1:"EUROPA", 2:"FRANCIA", 3:"ASTRONAUTA", 4:"MILITARES",
    5: "CLARAMENTE", 6: "LATINOAMERICA", 7: "MIENTRAS", 8: "DINAMARCA", 9:"GHANA", 10: "ESPECTACULAR"};



    constructor(nombre?: string, gano?: boolean, jugador?:string) 
    {
        super("Anagrama",gano,jugador);
    }

    public ArmarPalabra()
    {
        this.palabra = Math.floor(Math.random() * 8) + 1;

        this.palabraDesordenada = this.palabras[this.palabra];

        let array: Array<string> = this.palabraDesordenada.split("");

        array.sort(function() 
        {
            let retorno = Math.floor((Math.random() * 3)) - 1;

            while(retorno == 0)
            {
                retorno = Math.floor((Math.random() * 3)) - 1;
            }

            return retorno;
        });

        this.palabraDesordenada = array.join("");
    }

    public verificar(): boolean 
    {
        if(this.palabras[this.palabra] == this.palabraUsuario.toUpperCase())
        {
            this.gano = true;
        }

        return this.gano;
    }


    Configurar()
    {
        this.palabra = 0;
        this.palabraUsuario = "";
        this.palabraDesordenada = "";
        this.gano = false;
    }
    
}
