import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './../../servicios/firestore.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';


import { AuthService } from  './../../servicios/authservice.service'

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public users = [];

 /* constructor( private miConstructor:FormBuilder) { }
  email=new FormControl('',[Validators.email]);
  formRegistro:FormGroup=this.miConstructor.group({
    usuario:this.email
  });*/


  email: string = "";
  clave: string = "";
   lenghtError = false;

  constructor(
    private firestoreService: FirestoreService,
    private authService: AuthService,
    private router: Router
  ) { }

  
  Registrar()
  {
    if (this.clave.length < 6)
    {
      this.lenghtError = true;
    }

    this.authService.RegistrarUsuario(this.email, this.clave).then((res)=>  
    {
      this.router.navigate(['/Principal']);
    }).catch(error => console.log("Error:", error));
  }


  ngOnInit() {}
  /*coffeeOrders;   
  
  getCoffeeOrders = () =>
      this.firestoreService
      .getUsers()
      .subscribe(res =>(this.coffeeOrders = res));*/


}
