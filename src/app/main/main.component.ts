import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  errorMessage: string;
  mains: any;
  subscription: Subscription;
  constructor (private mainService: MainService) {}
  ngOnInit() { this.getMain()}
  ngOnDestroy() {this.subscription.unsubscribe();}
  getMain() {
    this.subscription = this.mainService.getMain('/public/jsons/main.json')
                     .subscribe(
                       mains => {this.mains = mains},
                       error =>  this.errorMessage = <any>error);
  }

}
