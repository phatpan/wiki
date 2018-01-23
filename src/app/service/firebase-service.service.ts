import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService{
  basePath: string = "/wikis";
  wikiList: FirebaseListObservable<any[]>;
  constructor(private db:AngularFireDatabase, private afAuth: AngularFireAuth) {}
  
  getWikiList(): FirebaseListObservable<any[]>{
    this.wikiList =  this.db.list(this.basePath);
    return this.wikiList;
  }

  getWiki(id){
    const wikiPath =  `${this.basePath}/${id}`;
    return this.db.object(wikiPath);
  }

  removeWiki(id): void{
    this.wikiList.remove(id);
  }

  addWiki(data){
    return this.db.list(this.basePath).push(data);
  }

  editWiki(id,data){
    return this.db.list(this.basePath).update(id,data);
  }

  loginWithFacebook(): firebase.Promise<any> {
    var provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  logout(): firebase.Promise<any>{
    return this.afAuth.auth.signOut(); 
  }
}
