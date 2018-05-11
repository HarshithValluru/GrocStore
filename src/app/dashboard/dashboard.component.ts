import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor() { }
  showSearch: boolean = false;

  openSearch() {
    this.showSearch = this.showSearch==true ? false : true;
    var btnValue = document.getElementById("showSearchButton").innerHTML;
    btnValue = btnValue=="Open Search" ? "Hide Search" : "Open Search";
    document.getElementById("showSearchButton").innerHTML = btnValue;
  }
}
