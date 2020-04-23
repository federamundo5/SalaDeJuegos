import { Injectable } from '@angular/core';
import {Usuario} from '../clases/usuario'

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
