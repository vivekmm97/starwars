import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
  @Input() load: any;
  constructor() { }
  filmStatus: boolean;
  charStatus: boolean;
  starshipStatus: boolean;
  vehicleStatus: boolean;
  planetStatus: boolean;
  speciesStatus: boolean;
  shareValue: string;
  ngOnInit(): void {
    // console.log("Load Value",this.load)
    if (this.load == "films")
      this.filmStatus = true;
    else if (this.load == "species")
      this.speciesStatus = true;
    else if (this.load == "planets")
      this.planetStatus = true;
    else if (this.load == "vehicles")
      this.vehicleStatus = true;
    else if (this.load == "people")
      this.charStatus = true;
    else
      this.starshipStatus = true;
  }

  routerLink(title: any) {
    // this.filmStatus = this.charStatus = this.vehicleStatus = this.planetStatus = this.speciesStatus = this.starshipStatus = false;

    if (title == "films") {
      this.filmStatus = true;
      this.charStatus = false;
      this.planetStatus = false;
      this.vehicleStatus = false;
      this.starshipStatus = false;
      this.speciesStatus = false;
    }

    else if (title == "species"){
      this.speciesStatus = true;     
      this.filmStatus = false;
      this.charStatus = false;
      this.planetStatus = false;
      this.vehicleStatus = false;
      this.starshipStatus = false;
       
    }

    else if (title == "planets"){
      this.planetStatus = true;
      this.speciesStatus = false;     
      this.filmStatus = false;
      this.charStatus = false;
      this.starshipStatus =false;
      this.vehicleStatus = false;
    }

    else if (title == "vehicles"){
      this.vehicleStatus = true;
      this.filmStatus = false;
      this.planetStatus = false;
      this.starshipStatus = false;
      this.speciesStatus = false;
      this.charStatus = false;
    }

    else if (title == "people"){
      this.charStatus = true;
      this.filmStatus = false;
      this.planetStatus = false;
      this.vehicleStatus =false;
      this.starshipStatus =false;
      this.speciesStatus = false;
    }

    else{
      this.starshipStatus =true;
      this.charStatus = false;
      this.filmStatus = false;
      this.planetStatus = false;
      this.vehicleStatus =false;
      this.speciesStatus = false;
    }

      console.log("Function called :",title)
      // console.log(this.charStatus, " ", this.vehicleStatus, " spei ",this.speciesStatus, "  film",this.filmStatus)
  }

}
