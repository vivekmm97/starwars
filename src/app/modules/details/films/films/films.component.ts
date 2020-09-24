import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  @Input() status : boolean;
  detailStatus = false;
  contentStatus = true;
  constructor() { }

  ngOnInit(): void {
  }

  loadDetails(){
    // this.contentStatus ? this.contentStatus : this.detailStatus;
    this.detailStatus = this.detailStatus ?  this.detailStatus : this.status;
    this.status = false;
   }

}
