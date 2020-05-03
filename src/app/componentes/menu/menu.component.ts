import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {UserServiceService} from '../../servicios/user-service.service';
import { AuthService } from './../../servicios/authservice.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() loger: EventEmitter<any> = new EventEmitter<any>();
  logeado:boolean = false;


  constructor(private route: ActivatedRoute, private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  
  getCurrentUser() 
  {
    this.authService.isAuth().subscribe(auth => {
      if (auth)
      {
        this.logeado = true;
      } 
      else 
      {
        this.logeado = false;
      }
    });
  }

  Logout() 
  {
    this.authService.LogoutUsuario();
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
    }
  }

}
