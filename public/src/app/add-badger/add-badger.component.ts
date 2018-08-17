import { Badger } from '../badger';
import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'




@Component({
  selector: 'app-add-badger',
  templateUrl: './add-badger.component.html',
  styleUrls: ['./add-badger.component.css']
})
export class AddBadgerComponent implements OnInit {
  createBadger: Badger = new Badger()
  errorName = ""
  errorColor= ""

  constructor(
    private httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addBadger(): void {
    this.httpService.addBadger(this.createBadger).subscribe(badger =>{
      this.httpService.storeBadger(badger as Badger)
     
      if(badger['errors']){
        badger['errors'].name == undefined ? this.errorName = "" : this.errorName = badger['errors'].name['message']
        badger['errors'].color == undefined ? this.errorColor = "" : this.errorColor = badger['errors'].color['message']       
      }
      else{
        this.errorName = ""
        this.errorColor = ""
      }


    })
  }

}
