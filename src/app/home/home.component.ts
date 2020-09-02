import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number=0;
  name: string;
  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
      this.clickCounter += 1;
  }

  setClasses(){
    let myClass = {
      highCount: this.clickCounter > 8,
      lowCount: this.clickCounter <= 8
    }
    return myClass;
  }
}
