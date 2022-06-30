import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsdetailsService {

  constructor(private _HttpClient:HttpClient) { }

  getNewsDatails(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.npoint.io/9b22cfe9d24dd0c8a222/News/${id-1}`);
  }
}
