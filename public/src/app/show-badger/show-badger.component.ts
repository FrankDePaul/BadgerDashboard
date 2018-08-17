import { HttpService } from '../http.service';
import { Badger } from '../badger';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-badger',
  templateUrl: './show-badger.component.html',
  styleUrls: ['./show-badger.component.css']
})
export class ShowBadgerComponent implements OnInit {
  badgers: Badger[]
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.badgers = this.httpService.getBadgers()
  }

}
