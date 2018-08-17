import { Badger } from './badger';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  badgers : Badger[]

constructor(private _http: HttpClient) { 
  this._http.get('/badgers').subscribe(badgers =>{
    this.badgers = badgers as Badger []
  })
}


  addBadger(badger: Badger){
    return this._http.post('badgers', badger)
  }

  editBadger(id: number,badger: Badger){  
    return this._http.put(`/badgers/${id}`,badger)
  }
  deleteBadger(id: number){  
    return this._http.delete(`/badgers/${id}`)
  }

  storeBadger(badger: Badger){
    if(!badger['errors']){
      this.badgers.push(badger)
    }
    
  }

  getBadgers(){
    return this.badgers
  }

  showBadger(id: number){
    return this._http.get(`/badgers/${id}`)
  }
  
}