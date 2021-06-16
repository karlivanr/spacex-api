import { Input, OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-details-card',
  templateUrl: './launch-details-card.component.html',
  styleUrls: ['./launch-details-card.component.scss']
})
export class LaunchDetailsCardComponent implements OnInit, OnChanges {

  showMe:boolean=false
  toggleTag(){
    this.showMe=!this.showMe
  }

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.data);
  }
}
