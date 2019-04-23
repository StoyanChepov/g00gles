import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  username: string;

  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('name');
  }

}
