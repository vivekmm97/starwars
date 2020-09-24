import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
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
