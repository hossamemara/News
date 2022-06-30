import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) 
  { 

  }

  getNewsListing():Observable<any>
  {
    return this._HttpClient.get('https://api.npoint.io/9b22cfe9d24dd0c8a222')
  }

  getBanners():Observable<any>
  {
    return this._HttpClient.get('https://api.npoint.io/1d796a6410023fc63ab1')
  }

  getNewsCategories():Observable<any>
  {
    return this._HttpClient.get('https://api.npoint.io/568b7d4f4a272de10d71')
  }

  chooseCategory(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.npoint.io/9b22cfe9d24dd0c8a222/News/${id-1}`)
  }


  
}
