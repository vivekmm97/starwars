import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  @Input() status : boolean;
  detailStatus = false;
  contentStatus = true;
  constructor() { }

  ngOnInit(): void {
  }
  loadDetails(){
    this.contentStatus = false;
    this.detailStatus = true;
    this.status = false;
   }

}
