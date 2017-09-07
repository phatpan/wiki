import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-add-wiki',
  templateUrl: './add-wiki.component.html',
  styleUrls: ['./add-wiki.component.css'],
})

export class AddWikiComponent implements OnInit {
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {}
  addWiki(data: NgForm){
    this.db.list("/wikis").push(data.value);
  }
}
