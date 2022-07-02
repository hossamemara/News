import { Component, OnInit } from '@angular/core';
import { HomeService } from './homeservices/home.service';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { FavoritesService } from '../favorites/favorites.service';
var fav: any[] = []
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flag:any;
  favNews :object = {};
  favNews2 :any[] = [];
  favNews3 :any[] = [];

  favNews_ :any;

  categoryFilter:any='';
  name = 'Angular 4';
  myDropDown : string = '';

  categories = [{
    "id": 1,
    "name": "Technology"
    },
    {
    "id": 2,
    "name": "Sports"
    },
    {
    "id": 3,
    "name": "Health"
    },
    {
    "id": 4,
    "name": "Economics"
    },
    {
    "id": 5,
    "name": "Art"
    },
    {"id": 0,
    "name": "All"
    }]
  @ViewChild('selectList', { static: false })
  selectList!: ElementRef ;

  onChangeofOptions(id: any) {
    this._NgxSpinnerService.show();
     console.log(id);
      
      if (id==0 || id==null)
      {
        debugger;
        this._HomeService.getNewsListing().subscribe(
          
          (data)=>
          {
            setTimeout(() => {
              this._NgxSpinnerService.hide();
            }, 500);
            console.log(id)
           
              this.categoryFilter = data.News;
              console.log(this.categoryFilter)

          },
    
          (error)=>
          {
            console.error(error.message)
          },
    
         
        )
      }
      
      else
      {
        this._HomeService.getNewsListing().subscribe(
          (data)=>
          {
            setTimeout(() => {
              this._NgxSpinnerService.hide();
            }, 500);
            console.log(id)
            
           
              this.categoryFilter = data.News.filter((category:any)=>
              {
                return category.categoryID == id
    
              })
              
            
           
            
          },
    
          (error)=>
          {
            console.error(error.message)
          },
    
         
        )
      }
      
     
     
  }


  banners:any []= [] ;
news:any []= [] ; 


  constructor(private _FavoritesService:FavoritesService,private _HomeService:HomeService,private _NgxSpinnerService:NgxSpinnerService) { 

  }

  
  
  addFav(news:any)
  {   debugger;
   
  

    fav.push(news);
    localStorage.setItem('favNews',JSON.stringify(fav));
  } 
    
      
  

  

getBanners()
{
  this._HomeService.getBanners().subscribe(
      (data)=>
      {
        console.log(data.slides)
        this.banners = data.slides;
      },

      (error)=>
      {
        console.error(error.message)
      },

     
    )
}




  ngOnInit(): void {
    debugger;
    
    if (localStorage.getItem("favNews")!= null) 
    {
      fav = JSON.parse(localStorage.getItem("favNews")|| '{}')
    
    }
    
this.onChangeofOptions(null);
this.getBanners()


    

    

  }
  



}
