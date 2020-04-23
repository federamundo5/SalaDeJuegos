import { Injectable } from '@angular/core';
import {Usuario} from '../clases/Usuario'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }


 public  returnLogged(){
  var aValue = localStorage.getItem("usuario");
  if(aValue != null)
    return Usuario;

    return null;
 }

}
