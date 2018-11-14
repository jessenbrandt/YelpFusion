import { Component, OnInit } from '@angular/core';
import {SearchService } from '../search.service';
import { Results } from '../results'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
Math: any;
  results: Results[];
  constructor( private searchService: SearchService) {
    this.Math = Math
    this.results = this.results
   }

  ngOnInit() {
  }

  getYelp(price: string, location: string): void {
    this.searchService.getYelp(price, location).subscribe(results => {
      this.results = results.businesses
      console.log(this.results)
    }
    )
  }

}
