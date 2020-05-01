import { FlagsService } from '../servicios/flags.service'
import { Juego } from '../clases/juego'


export class JuegoAdivinaLaBandera  extends Juego{

    public PaisActual: string;
    private cService: FlagsService
    public randomNationISOCode;
   public PaisElegido: string;
  public countries;
  
  constructor(nombre?: string, gano?: boolean, jugador?:string) 
  {
      super("Adivina lA Bandera",gano,jugador);
      this.cService = new FlagsService();
  }

    Jugar(): void {
         this.countries = this.cService.getCountries();
         let random = Math.floor(Math.random()*this.countries.length);
        this.PaisActual = this.countries[random].name;
        this.randomNationISOCode = this.countries[random]['alpha-2']
         this.PaisElegido = "";
      }



      verificar()
      {
          if(this.PaisElegido.toUpperCase() == this.PaisActual.toUpperCase())
         {
             this.gano = true;
             return true;
         }
         else
         {
             this.gano=true;
         return false;
        }
      }


      Pasar()
      {       
     let countries = this.cService.getCountries();
        this.PaisElegido = "";
        let random = Math.floor(Math.random()*this.countries.length);
        this.PaisActual = this.countries[random].name;
        this.randomNationISOCode = this.countries[random]['alpha-2']

     }


}
