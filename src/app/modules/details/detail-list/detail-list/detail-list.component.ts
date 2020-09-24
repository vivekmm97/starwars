import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
  @Input() load : any;
  constructor() { }
  filmStatus : boolean;
  charStatus : boolean;
  starshipStatus : boolean;
  vehicleStatus : boolean;
  planetStatus : boolean;
  speciesStatus : boolean;
  shareValue : string;
  ngOnInit(): void {
    console.log("Load Value",this.load)
    if(this.load == "films")
      this.filmStatus = true;
    else if(this.load == "species")
      this.speciesStatus = true;
    else if(this.load =="planets")
      this.planetStatus=true;
    else if(this.load == "vehicles")
      this.vehicleStatus = true;
    else if(this.load == "people")
      this.charStatus = true;
    else
      this.starshipStatus = true;
    }
  routerLink(title : any){
    this.filmStatus = this.charStatus = this.vehicleStatus = this.planetStatus = this.speciesStatus = this.starshipStatus = false;
    // this.load = title;
    
    this.shareValue = title;
      if(title == "films" || this.load == "films")
        this.filmStatus = true;
      else if(title == "species" || this.load == "species")
        this.speciesStatus = true;
      else if(title == "planets" || this.load =="planets")
        this.planetStatus=true;
      else if(title == "vehicles" || this.load == "vehicles")
        this.vehicleStatus = true;
      else if(title == "people" || this.load == "people")
        this.charStatus = true;
      else
        this.starshipStatus = true;
  }

}
