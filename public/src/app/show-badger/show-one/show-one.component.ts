import { HttpService } from '../../http.service';
import { Badger } from '../../badger';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent implements OnInit {
  
  showBadger : Badger
  constructor(
    private httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router)
  {}

  ngOnInit() {
    this._route.params.subscribe(params =>{
      this.httpService.showBadger(params.id).subscribe(badger =>{
        this.showBadger = badger as Badger;
      })
    })
  }
  editBadger(): void {
    this._route.params.subscribe(params =>{
      this.httpService.editBadger(params.id, this.showBadger).subscribe(badger =>{
        this.showBadger = badger as Badger
        console.log(badger)
      })
      
    })

  }
  deleteBadger(): void {
    this._route.params.subscribe(params =>{
      this.httpService.deleteBadger(params.id).subscribe(badger =>{

      })
      
    })

  }

}
