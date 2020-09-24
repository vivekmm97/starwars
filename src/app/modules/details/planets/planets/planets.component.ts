import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  @Input() status : boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
