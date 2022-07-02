import { Component, OnInit } from '@angular/core';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favNews_ :any[] = [];
  favoriteNews :any[] = [];
  constructor(private _FavoritesService:FavoritesService) { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem("favNews")||'{}') != null) {
      debugger;
      this.favoriteNews = JSON.parse(localStorage.getItem("favNews")||'{}');
      
  }
}

}
