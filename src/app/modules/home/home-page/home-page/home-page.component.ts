import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() { }
  status = true;
  public text : string;
  loadStatus = false;
  ngOnInit(): void {
  }

  selected(name :string){
    this.text = name;
    // console.log("Message ",name);
    this.status = this.status ? false : true ;
    this.loadStatus = true;
  }   

}
