import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favNews:any [] = [];
  constructor() { }
  saveFavorites(news:any)
  {
    debugger;
      if (JSON.parse(localStorage.getItem("favNews")|| '{}')!= null)
      {
        this.favNews.push(news,JSON.parse(localStorage.getItem("favNews")|| '{}'));
      }
      else
      {
        this.favNews.push(news);
      }
      
    
    
    localStorage.setItem("favNews", JSON.stringify(this.favNews));
  }
  getFavorites()
  {
    return JSON.parse(localStorage.getItem("favNews")|| '{}')
  }
}
