import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../servicios/authservice.service'


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  logeado:boolean = false;



 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(private authService: AuthService) {  }

  ngOnInit() {
    this.getCurrentUser();
    this.Pasar();
  }

 Pasar(){
  this.authService.ObtenerUsuario();
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

}
