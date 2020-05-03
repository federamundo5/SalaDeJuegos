import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}
  public register(data: {user: string, password: string}) {
    return this.firestore.collection('users').add(data);
  }


  public getCat(documentId: string) {
    return this.firestore.collection('users').doc(documentId).snapshotChanges();
  }
  public getUsers() {
    return this.firestore.collection("users").snapshotChanges();
  }


  public agregarListado(data: {Juego: string, Gano: string, Jugador:string}) {
    return this.firestore.collection('Listado').add(data);
  }

}
