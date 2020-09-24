import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  detailStatus = false;
  contentStatus = true;
  @Input() status : boolean;
  constructor() { }

  ngOnInit(): void {
    console.log("Status",this.status)
  }
  loadDetails(){
    this.contentStatus = false;
    this.detailStatus = true;
    this.status = false;
   }

}
