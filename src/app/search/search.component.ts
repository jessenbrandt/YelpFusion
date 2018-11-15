import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
// import { Results } from '../results'
import { FormControl, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  i: number;
  Math: any;
  showResults: boolean
  results: any;
  food: any;
  form: FormGroup
  constructor(private searchService: SearchService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      city: new FormControl(''),
      price: new FormControl(''),
      state: new FormControl('')
    })
  }

  // getYelp(price: string, location: string): void {
  //   this.searchService.getYelp(price, location).subscribe(results => {
  //     console.log(this.results)
  //     this.showResults = true;
  //     this.results = results
  //     this.i = Math.floor(Math.random() * 50)
  //     this.results = this.results.businesses[this.i]
  //   }
  //   )}


  getYelp() {
    this.searchService.getYelp(this.form.value.price, this.form.value.city, this.form.value.state).subscribe(results => {
      this.food = results.businesses[Math.floor(Math.random() * results.businesses.length)]
      return this.food
    })
  }

}
