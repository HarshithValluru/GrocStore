import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  showSearchValue: boolean = false;

  ngOnInit() {
    //this.scrollToBottom();
  }
  showSearch(){
    this.showSearchValue = true;    
    $(".container").scrollTop(800);
  }
  scrollToBottom() {
    var messages = jQuery(".container");
    var clientHeight = messages.prop("clientHeight");
    var scrollTop = messages.prop("scrollTop");
    var scrollHeight = messages.prop("scrollHeight");
    console.log("CH==",clientHeight);
    console.log("ST==",scrollTop);
    console.log("SH==",scrollHeight);
    if(clientHeight + scrollTop >= scrollHeight){
      messages.scrollTop(scrollHeight);
      console.log("Scrolled Inside");
    }
  };
}