import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  
  showZipInput: boolean = false;
  popOver: string = "This Functionality will be integrated with iCETS LBS Platform";
  constructor() { }
}
