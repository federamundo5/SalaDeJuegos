import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends  Juego {
    userSelected: string;
  compSelected: string;
  compWeapons = [
    'rock',
    'paper',
    'scissors'

  ];
  empato: boolean;



    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Piedra Papel o Tijera",gano,jugador);    
      }



      Jugar(userWeapon: string): void {
        this.userSelected = userWeapon;
        console.log( this.userSelected);
          const randomNum = Math.floor(Math.random() * 3);
          this.compSelected = this.compWeapons[randomNum];
      }


      verificar() {
        const userChoice = this.userSelected;
        const compChoice = this.compSelected;
        switch (userChoice + compChoice) {
          case 'rockscissors':
          case 'paperrock':
          case 'scissorspaper':
           this.gano=true;
           return true;
          break;
          case 'rockpaper':
          case 'scissorsrock':
          case 'paperscissors':
             this.gano = false;
             return false;
          break;
          default:
            this.gano = false;
            this.empato = true;
            return false;
            break;
        }

      }

    }
  


