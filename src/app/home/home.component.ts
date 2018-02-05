import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from '../service/firebase-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  wikiList: FirebaseListObservable<any[]>;
  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.wikiList = this.firebaseService.getWikiList();
  }
  delWiki(data) {
    this.firebaseService.removeWiki(data.$key);
  }
  editWiki(data) {
    this.router.navigate([`/editWiki/${data.$key}`]);
  }
  logoutWithFacebook() {
    this.firebaseService.logout().then(() => {
      this.router.navigate(["/"]);
    });
  }
}
