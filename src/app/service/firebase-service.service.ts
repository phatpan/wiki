import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {
  wikiList: AngularFireList<any>;
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.wikiList = db.list('wikis');
  }

  getWikiList(): Observable<any[]> {
    return this.wikiList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    });
  }

  getWiki(id): Observable<any> {
    return this.db.object('wikis/' + id).snapshotChanges().map(res => {
      return res.payload.val();
    });
  }

  removeWiki(id): void {
    this.wikiList.remove(id);
  }

  addWiki(data) {
    return this.wikiList.push(data);
  }

  editWiki(id, data) {
    return this.wikiList.update(id, data);
  }

  loginWithFacebook(): Promise<any> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
