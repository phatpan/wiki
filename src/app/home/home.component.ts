import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../service/firebase-service.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  wikis: any[];
  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getWikiList().subscribe(items => {
      this.wikis = items;
    });
  }
  delWiki(data) {
    this.firebaseService.removeWiki(data.key);
  }
  editWiki(data) {
    this.router.navigate([`/editWiki/${data.key}`]);
  }
  logoutWithFacebook() {
    this.firebaseService.logout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
