import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private currentLocation: string="Raleigh";
  private locations: string[]=["Raleigh", "Durham"];
  constructor() { }

  ngOnInit() {
  }

}
