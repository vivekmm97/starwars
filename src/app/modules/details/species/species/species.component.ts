import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  @Input() status : boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
