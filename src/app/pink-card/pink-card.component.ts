import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pink-card',
  templateUrl: './pink-card.component.html',
  styleUrls: ['./pink-card.component.scss']
})
export class PinkCardComponent implements OnInit {
  @Input() 
  node: Object; 


  constructor() { }

  ngOnInit(): void {
  }

}
