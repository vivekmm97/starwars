import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  @Input() pageLoad : any;
  title : string;
  constructor() { }

  ngOnInit(): void {
      this.title = localStorage.getItem('title')
      console.log("Got The Value ",this.title)
      this.pageLoad = true;
  }
  loadDetails(){
    console.log("Data");
  }

}
