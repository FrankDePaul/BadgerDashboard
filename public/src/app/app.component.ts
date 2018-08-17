import { Component, OnInit } from '@angular/core';
import {Badger} from './badger'
import {HttpService} from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Badgers Dashboard';


  constructor(private httpService: HttpService){

  }
  ngOnInit(): void {}
}
