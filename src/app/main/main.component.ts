import { Component, OnInit } from '@angular/core';
import { MainService } from '../core';


@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  errorMessage: string;
  mains: any;
  constructor (private mainService: MainService) {}
  ngOnInit() { this.getMain()}

  getMain() {
    this.mainService.getMain('/public/jsons/main.json')
                     .subscribe(
                       mains => {this.mains = mains},
                       error =>  this.errorMessage = <any>error);
  }

}
