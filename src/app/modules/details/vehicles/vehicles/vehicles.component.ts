import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  @Input() status : boolean;
  detailStatus = false;
  contentStatus = true
  constructor() { }

  ngOnInit(): void {
  }
  loadDetails(){
    this.contentStatus = false;
    this.detailStatus = true;
    this.status = false;
   }
}
