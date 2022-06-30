import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsdetailsService } from './newsdetailsservices/newsdetails.service';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.css']
})
export class NewsdetailsComponent implements OnInit {
  id:any;
  newsDetails:any = {} ;
  constructor(private _ActivatedRoute:ActivatedRoute,private _NewsdetailsService:NewsdetailsService) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._NewsdetailsService.getNewsDatails(this.id).subscribe(
      (data)=>
      {
          this.newsDetails = data;
          console.log(data);
          
      }
    )
  }

}
